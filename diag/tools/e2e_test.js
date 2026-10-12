// End-to-end browser test. See README "Re-running the checks". Needs: npm i playwright, a local server, local Chart.js, and SHEET_URL pointed at /stub-sheet.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const BASE = process.env.BASE_URL || 'http://127.0.0.1:8765';
const SHOTS = path.join(__dirname, 'e2e-shots');
fs.mkdirSync(SHOTS, { recursive: true });

// Load the real question bank to compute the expected score independently of the page.
const qsrc = fs.readFileSync(path.join(__dirname, '..', 'js', 'questions.js'), 'utf8');
const ctx = {}; vm.createContext(ctx);
vm.runInContext(qsrc + '\nthis.Q = APES_QUESTIONS; this.M = APES_META;', ctx);
const Q = ctx.Q, META = ctx.M;

const results = [];
const consoleErrors = [];
function check(name, ok, detail = '') { results.push({ name, ok, detail }); console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`); }

function watch(page, label) {
  page.on('console', m => { if (m.type() === 'error') consoleErrors.push(`[${label}] ${m.text()}`); });
  page.on('pageerror', e => consoleErrors.push(`[${label}] pageerror: ${e.message}`));
}

// Known answer plan: i%3==0 correct, i%3==1 wrong, i%3==2 skipped.
function planFor(i) {
  const q = Q[i];
  if (i % 3 === 0) return q.correct;
  if (i % 3 === 1) return ['A', 'B', 'C', 'D'].find(l => l !== q.correct);
  return null;
}

(async () => {
  const browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
  const context = await browser.newContext({ viewport: { width: 1360, height: 900 } });

  // Stub the Sheet endpoint: capture POSTs, serve sheet-shaped GET data.
  let posted = null;
  let sheetRows = [];
  await context.route('**/stub-sheet**', async route => {
    const req = route.request();
    if (req.method() === 'POST') {
      posted = JSON.parse(req.postData());
      return route.fulfill({ status: 200, contentType: 'application/json', body: '{"status":"ok"}' });
    }
    return route.fulfill({ status: 200, contentType: 'application/json',
      body: JSON.stringify({ status: 'ok', data: sheetRows }) });
  });

  // ───────────────────────── 1. Take the exam ─────────────────────────
  const page = await context.newPage(); watch(page, 'index');
  await page.goto(`${BASE}/index.html`);
  check('cover subtitle is metadata-driven',
    (await page.textContent('#coverSubtitle')).includes(`${META.totalQuestions} questions`) &&
    (await page.textContent('#coverSubtitle')).includes(`${META.examMinutes} minutes`),
    await page.textContent('#coverSubtitle'));
  check('calculator note shown on cover', (await page.textContent('#coverCalcNote')).includes('calculator'));
  check('timer starts at 90:00 before exam', (await page.textContent('#timerDisplay')) === '90:00');

  await page.fill('#studentName', 'Test Student');
  await page.fill('#studentId', 'test@example.com');
  await page.click('.btn-start');
  await page.waitForSelector('#exam', { state: 'visible' });

  const shotQs = new Set([2, 15, 25, 30, 51, 58]);   // stimulus items to screenshot (1-based)
  let expected = 0, expectWrong = 0, expectSkip = 0;
  for (let i = 0; i < Q.length; i++) {
    const label = await page.textContent('#progressLabel');
    if (label !== `Question ${i + 1} of ${Q.length}`) { check(`progress label at Q${i + 1}`, false, label); }
    const pick = planFor(i);
    if (pick) { await page.click(`#opt-${pick}`); }
    if (pick === Q[i].correct) expected++; else if (pick) expectWrong++; else expectSkip++;
    if (shotQs.has(i + 1)) await page.screenshot({ path: path.join(SHOTS, `q${String(i + 1).padStart(2, '0')}.png`) });
    if (i < Q.length - 1) await page.click('.footer-nav .btn-nav.primary');
  }
  check('timer is counting down during exam', /^(89|90):\d\d$/.test(await page.textContent('#timerDisplay')));
  await page.click('.footer-nav .btn-nav.primary');            // "Submit Exam" on last question
  await page.waitForSelector('#submitModal.show');
  check('submit modal shows answered/total',
    (await page.textContent('#answeredCount')) === String(expected + expectWrong) &&
    (await page.textContent('#answeredTotal')) === String(Q.length));
  await page.click('#submitModal .btn-nav.primary');
  await page.waitForURL('**/results.html', { timeout: 15000 });

  // ───────────────────────── 2. Results page ─────────────────────────
  watch(page, 'results');
  await page.waitForSelector('#resultsPage', { state: 'visible' });
  const frac = (await page.textContent('#heroFraction')).replace(/\s+/g, '');
  check('results score matches expected exactly', frac === `${expected}/${Q.length}`, `${frac} vs ${expected}/${Q.length}`);
  const stats = await page.textContent('#heroStats');
  check('incorrect and skipped counts correct',
    stats.includes(`${expectWrong}Incorrect`) && stats.includes(`${expectSkip}Skipped`), stats.replace(/\s+/g, ' ').trim());
  check('AP projection labelled as estimate',
    (await page.textContent('#apBand')).includes('Planning estimate only'));

  // Submission payload
  check('payload was POSTed to stub', !!posted);
  if (posted) {
    check('payload totalScore/totalPossible', posted.totalScore === expected && posted.totalPossible === Q.length,
      `${posted.totalScore}/${posted.totalPossible}`);
    let unitOk = true, detail = [];
    META.units.forEach(u => {
      const k = `unit_${u.code.replace(/\s+/g, '_')}`;
      const exp = u.questions.filter(n => planFor(n - 1) === Q[n - 1].correct).length;
      if (posted[k + '_correct'] !== exp && !(exp === 0 && posted[k + '_correct'] === undefined)) { unitOk = false; detail.push(`${u.code}:${posted[k + '_correct']}≠${exp}`); }
      if (posted[k + '_total'] !== u.questions.length) { unitOk = false; detail.push(`${u.code} total ${posted[k + '_total']}`); }
    });
    check('payload per-unit correct/total match blueprint', unitOk, detail.join(', '));
    const biKeys = Object.keys(posted).filter(k => k.startsWith('bi_') && k.endsWith('_total')).map(k => k.split('_')[1]).sort();
    check('payload Big Idea keys are ERT/ENG/EIN/STB', JSON.stringify(biKeys) === JSON.stringify(['EIN', 'ENG', 'ERT', 'STB']), biKeys.join(','));
  }

  await page.waitForTimeout(1200);                          // chart animation
  await page.screenshot({ path: path.join(SHOTS, 'results-overview.png'), fullPage: true });
  check('Big Idea grid has 4 APES cards',
    (await page.$$eval('#biGrid .bi-card', els => els.map(e => e.className))).join('|')
      .match(/bi-(ert|eng|ein|stb)/g)?.length === 4);

  for (const [tab, sel, minCount] of [['units', '#unitTableBody tr', 9], ['skills', '#spTableBody tr', 10],
                                       ['review', '#reviewList .q-review-item', 80], ['recs', '#recList .rec-item', 1]]) {
    await page.click(`.tab-btn[onclick="showTab('${tab}')"]`);
    await page.waitForTimeout(500);
    const n = await page.$$eval(sel, els => els.length);
    check(`results tab "${tab}" renders (${n} rows)`, n >= minCount);
    await page.screenshot({ path: path.join(SHOTS, `results-${tab}.png`) });
  }
  const unitRows = await page.$$eval('#unitTableBody tr', trs => trs.map(t => t.innerText.replace(/\s+/g, ' ')));
  check('unit table shows unequal denominators (/6 and /16)',
    unitRows.some(r => r.includes('/6')) && unitRows.some(r => r.includes('/16')));
  const spRow = await page.textContent('#spTableBody');
  check('skills table uses CED descriptions', spRow.includes('Calculate an accurate numeric answer'));
  // open one explanation
  await page.click(`.tab-btn[onclick="showTab('review')"]`);
  await page.click('#reviewList .q-explanation-toggle');
  check('explanation opens', (await page.textContent('#reviewList .q-explanation-body.open')).includes('Big Idea:'));

  // ───────────────────────── 3. Dashboard: demo ─────────────────────────
  const dash = await context.newPage(); watch(dash, 'dashboard-demo');
  // config URL is set, so it may auto-connect; serve an empty sheet for this phase
  sheetRows = [];
  await dash.goto(`${BASE}/dashboard.html`);
  await dash.waitForTimeout(800);
  await dash.evaluate(() => loadDemo());
  await dash.waitForTimeout(1200);
  const demoRows = await dash.$$eval('#rosterBody tr', r => r.length);
  check('dashboard demo roster renders', demoRows >= 20, `${demoRows} rows`);
  const heat = await dash.$$eval('#heatmapTable th', ths => ths.map(t => t.textContent.trim()));
  check('heatmap has 9 unit columns', heat.filter(h => /^U\d$/.test(h)).length === 9, heat.join(' '));
  await dash.screenshot({ path: path.join(SHOTS, 'dashboard-demo.png'), fullPage: true });
  for (const t of ['roster', 'units', 'unitdiag', 'class']) {
    await dash.click(`.tab-btn[onclick="showTab('${t}')"]`); await dash.waitForTimeout(300);
  }

  // ─────────── 4. Dashboard: sheet rows WITHOUT aggregate columns ───────────
  const raw1 = {}; Q.forEach((q, i) => { raw1[i] = q.correct; });             // 80/80
  const raw2 = {}; Q.forEach((q, i) => { const p = planFor(i); if (p) raw2[i] = p; }); // same as exam
  sheetRows = [
    { studentName: 'Perfect Paula', studentId: 'p@x.edu', period: 'October', rawAnswers: JSON.stringify(raw1) },
    { studentName: 'Mixed Max', studentId: 'm@x.edu', period: 'October', rawAnswers: JSON.stringify(raw2) },
  ];
  const dash2 = await context.newPage(); watch(dash2, 'dashboard-sheet');
  await dash2.goto(`${BASE}/dashboard.html`);
  await dash2.waitForFunction(() => document.querySelectorAll('#rosterBody tr').length >= 2, null, { timeout: 10000 }).catch(() => {});
  const rosterText = await dash2.textContent('#rosterBody').catch(() => '');
  check('sheet rows without aggregates: perfect score recomputed', rosterText.includes(`${Q.length}/${Q.length}`), rosterText.slice(0, 120));
  check('sheet rows without aggregates: mixed score recomputed', rosterText.includes(`${expected}/${Q.length}`));
  await dash2.click(`.tab-btn[onclick="showTab('units')"]`); await dash2.waitForTimeout(400);
  const heatCells = await dash2.$$eval('#heatmapTable td', tds => tds.map(t => t.textContent.trim()));
  check('heatmap filled from rawAnswers (100% cells present)', heatCells.filter(c => c === '100%' || c === '100').length >= 9, heatCells.slice(0, 12).join(' '));
  await dash2.screenshot({ path: path.join(SHOTS, 'dashboard-sheet.png'), fullPage: true });

  // Full Report from dashboard
  await dash2.click(`.tab-btn[onclick="showTab('roster')"]`);
  const [report] = await Promise.all([
    context.waitForEvent('page'),
    dash2.click('#rosterBody tr:has-text("Mixed Max") .drill-btn:has-text("Full Report")'),
  ]);
  watch(report, 'full-report');
  await report.waitForSelector('#resultsPage', { state: 'visible', timeout: 10000 });
  const rfrac = (await report.textContent('#heroFraction')).replace(/\s+/g, '');
  check('Full Report from dashboard shows recomputed score', rfrac === `${expected}/${Q.length}`, rfrac);
  await report.waitForTimeout(1200);
  await report.screenshot({ path: path.join(SHOTS, 'full-report.png') });

  await browser.close();

  // ───────────────────────── summary ─────────────────────────
  const errs = consoleErrors.filter(e => !/favicon/i.test(e));
  check('zero console errors across all pages', errs.length === 0, errs.slice(0, 5).join(' | '));
  const fails = results.filter(r => !r.ok);
  console.log(`\n${results.length} checks: ${results.length - fails.length} pass, ${fails.length} fail`);
  console.log(`expected exam score ${expected}/${Q.length} (wrong ${expectWrong}, skipped ${expectSkip})`);
  process.exit(fails.length ? 1 : 0);
})().catch(e => { console.error('CRASH', e); process.exit(2); });
