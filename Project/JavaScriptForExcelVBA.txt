function PQvsLO_YZM() {
    let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Hesaplamalar");
    let i = 1;
    let f = 0;
    while (f === 0) {
        i++;
        if (sheet.getRange(14, i).getValue() === "") {
            f = 1;
        }
    }
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

    let lo = [];
    for (let i = 1; i <= m; i++) {
        lo[i] = [];
        for (let j = 1; j <= 8; j++) {
            lo[j][i] = sheet.getRange(4 + j, 1 + i).getValue();
            sheet.getRange(4 + j, m + 5 + i).setValue(lo[j][i]);
            sheet.getRange(4 + j, m + 5 + i).setHorizontalAlignment("center");
            sheet.getRange(4 + j, m + 5 + i).setNumberFormat("0");
        }
    }

    let w = [];
    let t = [];
    for (let i = 1; i <= m; i++) {
        w[i] = sheet.getRange(13, 1 + i).getValue();
        sheet.getRange(13, m + 5 + i).setValue(w[i]);
        sheet.getRange(13, m + 5 + i).setHorizontalAlignment("center");
        sheet.getRange(13, m + 5 + i).setNumberFormat("0.00");
        t[i] = sheet.getRange(14, 1 + i).getValue();
        sheet.getRange(14, m + 5 + i).setValue(t[i]);
        sheet.getRange(14, m + 5 + i).setHorizontalAlignment("center");
        sheet.getRange(14, m + 5 + i).setNumberFormat("0.00");
    }

    // Continue converting the rest of the VBA code to JavaScript
    // ...
}

function SetUp_YZM() {
    // Similar conversion as above
    // ...
}
