/**
 * AP Environmental Science Diagnostic — Google Apps Script Backend
 * =====================================================
 * Deploy as a Web App:
 *   Extensions → Apps Script → Deploy → New deployment
 *   Type: Web app
 *   Execute as: Me
 *   Who has access: Anyone
 *
 * Copy the Web App URL into js/config.js (APP_CONFIG.SHEET_URL).
 * Both index.html and dashboard.html read it from there.
 *
 * The payload field names are identical to the AP Biology build; only the unit
 * list (9 unequal units), the Big Idea codes and the totals differ.
 */

// ── Sheet config ──────────────────────────────────────────
const RESPONSES_SHEET = "Responses";
const UNITS = ['Unit 1','Unit 2','Unit 3','Unit 4','Unit 5','Unit 6','Unit 7','Unit 8','Unit 9'];
// Items per unit in the 80-question blueprint (must match js/questions.js APES_META).
const UNIT_SIZES = { 'Unit 1':6, 'Unit 2':6, 'Unit 3':9, 'Unit 4':9, 'Unit 5':10,
                     'Unit 6':10, 'Unit 7':7, 'Unit 8':7, 'Unit 9':16 };
const TOTAL_QUESTIONS = 80;
// APES Big Ideas: Earth systems, Energy transfer, Species-environment interactions, Sustainability.
const BIG_IDEAS = ['ERT', 'ENG', 'EIN', 'STB'];
const DIFFICULTIES = ['1', '2', '3'];

const HEADERS = [
  "Timestamp",
  "Student Name",
  "Student ID",
  "Month",
  "Start Time",
  "Submit Time",
  "Time Taken (min)",
  "Diagnostic Type",
  "Total Score",
  "Total Possible",
  "Score %",
  // Unit scores (full diagnostic only)
  ...UNITS.flatMap(u => [`${u} Correct`, `${u} %`]),
  // Big Ideas (full diagnostic only)
  ...BIG_IDEAS.map(bi => `${bi} %`),
  // Difficulty
  "Easy %", "Medium %", "Hard %",
  // Meta
  "Wrong Q IDs",
  "Skipped Q IDs",
  "Raw Answers (JSON)",
  // Unit-diagnostic only
  "Topic Scores (JSON)",
  "SP Scores (JSON)"
];

// ── doPost — receives exam submissions ────────────────────
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("Missing request body");
    }
    const data = JSON.parse(e.postData.contents);
    if (!data.studentName || !String(data.studentName).trim()) {
      throw new Error("studentName is required");
    }
    writeResponse(data);
    return jsonOutput({ status: "ok" });
  } catch (err) {
    return jsonOutput({ status: "error", message: err.message });
  }
}

// ── doGet — serves data to dashboard ─────────────────────
function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || "getAll";
  try {
    if (action === "getAll") {
      return jsonOutput({ status: "ok", data: getAllResponses() });
    }
    return jsonOutput({ status: "error", message: `Unknown action: ${action}` });
  } catch (err) {
    return jsonOutput({ status: "error", message: err.message });
  }
}

function jsonOutput(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── Write a single student response ──────────────────────
function writeResponse(data) {
  const sheet = getOrCreateResponsesSheet();

  const unitScore = unit => Number(data[`unit_${unit.replace(/\s+/g, '_')}_correct`]) || 0;
  const unitTotal = unit => Number(data[`unit_${unit.replace(/\s+/g, '_')}_total`]) || UNIT_SIZES[unit] || 0;
  const biPct = bi => pctOf(data[`bi_${bi}_correct`], data[`bi_${bi}_total`]);
  const diffPct = d => pctOf(data[`diff_${d}_correct`], data[`diff_${d}_total`]);

  const totalPossible = Number(data.totalPossible) || TOTAL_QUESTIONS;
  const totalScore = Number(data.totalScore) || 0;
  const pctScore = Number.isFinite(Number(data.pctScore))
    ? Number(data.pctScore)
    : pctOf(totalScore, totalPossible);

  const row = [
    new Date().toISOString(),
    String(data.studentName || "").trim(),
    String(data.studentId || "").trim(),
    String(data.period || "").trim(),
    data.startTime || "",
    data.submitTime || "",
    Number(data.timeTaken) || 0,
    String(data.diagnosticType || "Full").trim(),
    totalScore,
    totalPossible,
    pctScore,
    ...UNITS.flatMap(u => {
      const c = unitScore(u), t = unitTotal(u);
      return [c, t > 0 ? Math.round(c / t * 100) : 0];
    }),
    ...BIG_IDEAS.map(biPct),
    ...DIFFICULTIES.map(diffPct),
    sanitizeIdList(data.wrongQs),
    sanitizeIdList(data.skippedQs),
    typeof data.rawAnswers === 'string' ? data.rawAnswers : JSON.stringify(data.rawAnswers || {}),
    typeof data.topicScores === 'string' ? data.topicScores : JSON.stringify(data.topicScores || {}),
    typeof data.spScores === 'string' ? data.spScores : JSON.stringify(data.spScores || {})
  ];

  sheet.appendRow(row);

  // Color-code the Score % cell for at-a-glance grading
  const lastRow = sheet.getLastRow();
  const scoreCol = HEADERS.indexOf("Score %") + 1;
  const scoreCell = sheet.getRange(lastRow, scoreCol);
  scoreCell.setBackground(pctScore >= 70 ? "#E8F5E9" : pctScore >= 45 ? "#FFF3E0" : "#FFEBEE");
}

function pctOf(correct, total) {
  const c = Number(correct) || 0;
  const t = Number(total) || 0;
  return t > 0 ? Math.round(c / t * 100) : 0;
}

function sanitizeIdList(v) {
  return (v === undefined || v === null) ? "" : String(v);
}

// ── Read all responses ────────────────────────────────────
function getAllResponses() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(RESPONSES_SHEET);
  if (!sheet || sheet.getLastRow() < 2) return [];

  const raw = sheet.getDataRange().getValues();
  const headers = raw[0];
  const rows = raw.slice(1);

  return rows
    .map(row => {
      const obj = {};
      headers.forEach((h, i) => { obj[h] = row[i]; });

      const unitScores = {};
      UNITS.forEach(u => {
        const key = `${u} Correct`;
        if (obj[key] !== undefined) unitScores[u] = obj[key];
      });

      return {
        studentName: obj["Student Name"] || "",
        studentId: obj["Student ID"] || "",
        period: obj["Month"] || "",
        startTime: obj["Start Time"] || "",
        submitTime: obj["Submit Time"] || "",
        timeTaken: obj["Time Taken (min)"] || 0,
        diagnosticType: obj["Diagnostic Type"] || "Full",
        totalScore: obj["Total Score"] || 0,
        totalPossible: obj["Total Possible"] || TOTAL_QUESTIONS,
        pctScore: obj["Score %"] || 0,
        wrongCount: countIds(obj["Wrong Q IDs"]),
        skippedCount: countIds(obj["Skipped Q IDs"]),
        unitScores,
        bi_ERT_pct: obj["ERT %"] || 0,
        bi_ENG_pct: obj["ENG %"] || 0,
        bi_EIN_pct: obj["EIN %"] || 0,
        bi_STB_pct: obj["STB %"] || 0,
        rawAnswers: obj["Raw Answers (JSON)"] || "",
        topicScores: parseJsonSafe(obj["Topic Scores (JSON)"]),
        spScores: parseJsonSafe(obj["SP Scores (JSON)"])
      };
    })
    .filter(r => r.studentName);
}

function countIds(str) {
  if (!str) return 0;
  return String(str).split(',').filter(Boolean).length;
}

function parseJsonSafe(str) {
  if (!str) return {};
  try { return JSON.parse(str); } catch (e) { return {}; }
}

// ── Setup / migration helpers ─────────────────────────────
function getOrCreateResponsesSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(RESPONSES_SHEET);
  if (!sheet) {
    sheet = ss.insertSheet(RESPONSES_SHEET);
    formatHeaderRow(sheet);
  }
  return sheet;
}

function formatHeaderRow(sheet) {
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  sheet.getRange(1, 1, 1, HEADERS.length)
    .setBackground("#8B0D22")
    .setFontColor("#FFFFFF")
    .setFontWeight("bold")
    .setFontFamily("Arial");
  sheet.setFrozenRows(1);
}

/** Run once manually from the Apps Script editor to initialize the spreadsheet. */
function setupSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.rename("AP Environmental Science Diagnostic Results");

  const sheet = getOrCreateResponsesSheet();
  sheet.setColumnWidth(1, 180); // Timestamp
  sheet.setColumnWidth(2, 160); // Student Name
  sheet.setColumnWidth(3, 120); // Student ID
}
