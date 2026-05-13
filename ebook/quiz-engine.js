// ═══════════════════════════════════════════════════════════════
// AP ENVIRONMENTAL SCIENCE — QUIZ ENGINE
// Loads all question banks, filters, runs sessions, tracks score
// ═══════════════════════════════════════════════════════════════

const QuizEngine = (() => {
  let allQuestions = [];
  let session = [];
  let current = 0;
  let score = 0;
  let answered = 0;
  let selectedOption = null;
  let submitted = false;

  // ── Merge all loaded question banks ──
  function init() {
    allQuestions = [
      ...(window.QBANK_U1_3 || []),
      ...(window.QBANK_U4_6 || []),
      ...(window.QBANK_U7_9 || []),
      ...(window.QBANK_RESEARCH || [])
    ];
    updateCountLabel();
    document.querySelectorAll('.quiz-filter').forEach(el => {
      el.addEventListener('change', updateCountLabel);
    });
    ensureOptionStyles();
  }

  function ensureOptionStyles() {
    if (document.getElementById('quiz-option-styles')) return;
    const css = `
      .quiz-option{display:flex;align-items:center;gap:8px;padding:12px 16px;margin:8px 0;border:1px solid #ddd;border-radius:8px;background:#fff;cursor:pointer;transition:background-color .15s,border-color .15s,box-shadow .15s,color .15s;user-select:none}
      .quiz-option:hover{background:#f7f7f7;border-color:#ccc}
      .quiz-option .option-letter{font-weight:700;margin-right:6px}
      .quiz-option.selected{box-shadow:0 0 0 3px rgba(0,0,0,0.03)}
      .quiz-option.selected-correct{background:#e6f7ea;border-color:#28a745;color:#1b4f2b}
      .quiz-option.selected-incorrect{background:#fdecea;border-color:#dc3545;color:#702020}
      .quiz-option.correct{background:rgba(40,167,69,0.12);border-color:#28a745}
      .quiz-option.incorrect{background:#f8d7da;border-color:#dc3545}
      .quiz-option[style*="cursor: default"]{cursor:default}
    `;
    const s = document.createElement('style');
    s.id = 'quiz-option-styles';
    s.appendChild(document.createTextNode(css));
    document.head.appendChild(s);
  }

  // ── Filtering logic ──
  function getFiltered() {
    const unit = document.getElementById('f-unit').value;
    const skill = document.getElementById('f-skill').value;
    const diff = document.getElementById('f-difficulty').value;
    const topic = document.getElementById('f-topic').value;

    return allQuestions.filter(q => {
      if (unit !== 'all' && String(q.unit) !== unit) return false;
      if (skill !== 'all' && q.skill !== skill) return false;
      if (diff !== 'all' && q.difficulty !== diff) return false;
      if (topic !== 'all' && q.topic !== topic) return false;
      return true;
    });
  }

  function updateCountLabel() {
    const filtered = getFiltered();
    const label = document.getElementById('q-count-label');
    if (label) label.textContent = `${filtered.length} questions match your filters`;
  }

  // ── Shuffle helper ──
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ── Start quiz ──
  function start() {
    const filtered = getFiltered();
    if (filtered.length === 0) {
      alert('No questions match your current filters. Try broadening your selection.');
      return;
    }
    const countVal = document.getElementById('f-count').value;
    const n = countVal === 'all' ? filtered.length : parseInt(countVal);
    session = shuffle(filtered).slice(0, Math.min(n, filtered.length));
    current = 0; score = 0; answered = 0;

    document.getElementById('filter-panel').style.display = 'none';
    document.getElementById('quiz-session').style.display = 'block';
    document.getElementById('score-screen').style.display = 'none';
    renderQuestion();
  }

  // ── Render current question ──
  function renderQuestion() {
    submitted = false;
    selectedOption = null;
    const q = session[current];
    const total = session.length;

    document.getElementById('q-counter').textContent = `Question ${current + 1} of ${total}`;
    document.getElementById('q-score-live').textContent = `Score: ${score} / ${answered}`;
    document.getElementById('q-progress').style.width = `${(current / total) * 100}%`;

    // Meta tags
    const diffClass = `difficulty-${q.difficulty}`;
    document.getElementById('q-meta').innerHTML = `
      <span class="meta-tag">Unit ${q.unit}</span>
      <span class="meta-tag">${q.topicName}</span>
      <span class="meta-tag ${diffClass}">${cap(q.difficulty)}</span>
      <span class="meta-tag">${cap(q.skill)}</span>
      ${q.cedSkill ? `<span class="meta-tag">${q.cedSkill}</span>` : ''}
    `;

    // Stimulus
    const stimEl = document.getElementById('q-stimulus');
    if (q.stimulus) {
      stimEl.style.display = 'block';
      stimEl.innerHTML = `<strong>Stimulus:</strong> ${q.stimulus}`;
    } else {
      stimEl.style.display = 'none';
    }

    // Stem
    document.getElementById('q-stem').innerHTML = q.stem;

    // Options
    const optContainer = document.getElementById('q-options');
    optContainer.innerHTML = '';
    ['A', 'B', 'C', 'D'].forEach(letter => {
      const div = document.createElement('div');
      div.className = 'quiz-option';
      div.dataset.letter = letter;
      div.innerHTML = `<span class="option-letter">${letter}) </span><span class="option-text">${q.options[letter]}</span>`;
      div.addEventListener('click', () => selectOption(letter));
      optContainer.appendChild(div);
    });

    // Explanation
    const expl = document.getElementById('q-explanation');
    expl.className = 'quiz-explanation';
    expl.innerHTML = '';

    // Buttons
    document.getElementById('btn-submit').style.display = 'inline-flex';
    document.getElementById('btn-next').style.display = 'none';
    document.getElementById('btn-submit').disabled = true;
  }

  function selectOption(letter) {
    if (submitted) return;
    selectedOption = letter;
    const q = session[current];
    const correct = q ? q.correct : null;
    document.querySelectorAll('.quiz-option').forEach(el => {
      el.classList.remove('selected', 'selected-correct', 'selected-incorrect');
      if (el.dataset.letter === letter) {
        el.classList.add('selected');
        if (correct) {
          if (letter === correct) el.classList.add('selected-correct');
          else el.classList.add('selected-incorrect');
        }
      }
    });
    document.getElementById('btn-submit').disabled = false;
  }

  function submitAnswer() {
    if (!selectedOption || submitted) return;
    submitted = true;
    answered++;
    const q = session[current];
    const correct = q.correct;
    const isCorrect = selectedOption === correct;
    if (isCorrect) score++;

    document.getElementById('q-score-live').textContent = `Score: ${score} / ${answered}`;

    // Clear transient selected states, then apply final styles
    document.querySelectorAll('.quiz-option').forEach(el => {
      el.classList.remove('selected', 'selected-correct', 'selected-incorrect');
      const l = el.dataset.letter;
      el.style.cursor = 'default';
      if (l === correct) el.classList.add('correct');
      if (l === selectedOption && !isCorrect) el.classList.add('incorrect');
    });

    // Show explanation
    const expl = document.getElementById('q-explanation');
    expl.innerHTML = `
      <div style="margin-bottom:8px">
        ${isCorrect
          ? '<span class="correct-label">✓ Correct!</span>'
          : `<span class="incorrect-label">✗ Incorrect — Correct answer: ${correct}</span>`}
      </div>
      <div><strong>Rationale:</strong> ${q.rationale}</div>
    `;
    expl.classList.add('show');

    document.getElementById('btn-submit').style.display = 'none';
    const btnNext = document.getElementById('btn-next');
    btnNext.style.display = 'inline-flex';
    btnNext.textContent = current < session.length - 1 ? 'Next Question →' : 'See Results';
  }

  function nextQuestion() {
    current++;
    if (current >= session.length) {
      showScore();
    } else {
      renderQuestion();
    }
  }

  function showScore() {
    document.getElementById('quiz-session').style.display = 'none';
    document.getElementById('score-screen').style.display = 'block';
    const pct = Math.round((score / session.length) * 100);
    document.getElementById('final-score').textContent = score;
    document.getElementById('final-denom').textContent = `/ ${session.length}`;
    document.getElementById('final-pct').textContent = `${pct}%`;
    document.getElementById('q-progress').style.width = '100%';

    let label = '', color = '';
    if (pct >= 90) { label = 'Excellent — AP 5 territory!'; color = '#2a5940'; }
    else if (pct >= 75) { label = 'Strong work — AP 4 range.'; color = '#3d7a56'; }
    else if (pct >= 60) { label = 'Good foundation — review missed topics.'; color = '#b8862e'; }
    else if (pct >= 40) { label = 'Keep studying — revisit unit notes.'; color = '#c45a3a'; }
    else { label = 'Time for a deep review — start from Unit 1.'; color = '#b84a3a'; }
    const lbl = document.getElementById('final-label');
    lbl.textContent = label;
    lbl.style.color = color;
    document.getElementById('score-ring').style.borderColor = color;

    // Breakdown by unit
    const breakdown = {};
    session.forEach((q, i) => {
      const key = q.unit === 'R' ? 'Research' : `Unit ${q.unit}`;
      if (!breakdown[key]) breakdown[key] = { correct: 0, total: 0 };
      breakdown[key].total++;
    });
    // We need to track per-question correctness
    // Store results
    const results = session.map((q, i) => ({
      unit: q.unit === 'R' ? 'Research' : `Unit ${q.unit}`,
      correct: window._quizResults && window._quizResults[i]
    }));
  }

  function showFilters() {
    document.getElementById('filter-panel').style.display = 'block';
    document.getElementById('quiz-session').style.display = 'none';
    document.getElementById('score-screen').style.display = 'none';
    document.getElementById('q-progress').style.width = '0%';
    updateCountLabel();
  }

  function cap(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }

  // Populate topic filter based on all questions
  function populateTopicFilter() {
    const sel = document.getElementById('f-topic');
    if (!sel) return;
    const topics = {};
    allQuestions.forEach(q => { topics[q.topic] = q.topicName; });
    const sorted = Object.entries(topics).sort((a, b) => a[0].localeCompare(b[0]));
    sorted.forEach(([code, name]) => {
      const opt = document.createElement('option');
      opt.value = code;
      opt.textContent = `${code} — ${name}`;
      sel.appendChild(opt);
    });
  }

  // ── Public API ──
  return {
    init,
    start,
    submitAnswer,
    nextQuestion,
    showFilters,
    updateCountLabel,
    populateTopicFilter
  };
})();

// Wire up buttons after DOM loads
document.addEventListener('DOMContentLoaded', () => {
  QuizEngine.init();
  QuizEngine.populateTopicFilter();
});
