// Вставьте этот код в Google Apps Script, привязанный к вашей Google Таблице.
// Расширения → Apps Script → вставить → Развернуть как веб-приложение.

const SHEET_NAME = 'Ответы';

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Дата', 'Имя и фамилия', 'Ответ', 'Гостей']);
    sheet.setFrozenRows(1);
  }
  const p = e.parameter;
  sheet.appendRow([new Date(), p.name || '', p.attendance || '', Number(p.guests) || 0]);
  return ContentService.createTextOutput('ok');
}
