function PQvsLO_YZM() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Hesaplamalar");
  let i = 1;
  let f = 0;
  
  do {
    i++;
    if (sheet.getRange(14, i).getValue() === "") {
      f = 1;
    }
  } while (f === 0);

  let m = i - 2;

  for (let i = 1; i <= m; i++) {
    sheet.getRange(4, m + 5 + i).setValue(i);
    sheet.getRange(4, m + 5 + i).setHorizontalAlignment("center");
    sheet.getRange(4, m + 5 + i).setNumberFormat("0");
  }

  for (let j = 1; j <= 8; j++) {
    sheet.getRange(4 + j, m + 5).setValue(j);
    sheet.getRange(4 + j, m + 5).setHorizontalAlignment("center");
    sheet.getRange(4 + j, m + 5).setNumberFormat("0");
  }

  // Remaining code...
}

function SetUp_YZM() {
  // Similar conversion as above...
}
