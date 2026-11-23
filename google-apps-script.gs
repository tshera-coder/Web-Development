/**
 * Backend for the Web Development check-in website.
 * Paste this into Extensions > Apps Script of a new Google Sheet (see README.md).
 * Each check-in becomes one row in the "Attendance" tab.
 */

// ===== EDIT THESE =====
const TEACHER_PIN = 'change-me-1234';   // the PIN you type on the Teacher page
const EMAIL_EACH_CHECKIN = false;       // true = email you every time a student checks in
// ======================

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName('Attendance');
  if (!sh) {
    sh = ss.insertSheet('Attendance');
    sh.appendRow(['Time', 'Week', 'Topic', 'Student name', 'Score (out of 5)', 'Answers']);
    sh.setFrozenRows(1);
  }
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// Students send their check-in here
function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    const week = Math.max(1, Math.min(16, parseInt(d.week, 10) || 0));
    const name = String(d.name || '').trim().slice(0, 80);
    if (!name) return json_({ ok: false, error: 'Name missing' });
    const score = Math.max(0, Math.min(5, parseInt(d.score, 10) || 0));
    // Leading apostrophe stops names like "=SUM()" being treated as formulas
    sheet_().appendRow([new Date(), week, String(d.topic || '').slice(0, 80), "'" + name, score, String(d.answers || '').slice(0, 10)]);
    if (EMAIL_EACH_CHECKIN) {
      MailApp.sendEmail(Session.getEffectiveUser().getEmail(), `Check-in: ${name} (week ${week})`, `${name} checked in for week ${week} and scored ${score}/5.`);
    }
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: 'Bad request' });
  }
}

// The Teacher page reads the roster here
function doGet(e) {
  const p = e.parameter || {};
  if (p.pin !== TEACHER_PIN) return json_({ ok: false, error: 'Wrong PIN' });
  const week = parseInt(p.week, 10);
  const rows = sheet_().getDataRange().getValues().slice(1)
    .filter(r => r[1] === week)
    .map(r => ({ time: new Date(r[0]).toISOString(), name: String(r[3]), score: r[4] }))
    .sort((a, b) => a.name.localeCompare(b.name));
  return json_({ ok: true, rows });
}
