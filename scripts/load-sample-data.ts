// Manga Voice: load the sample series into MangaVoiceData.xlsx
// Run from Excel for the web: Automate > New Script, paste this in, then Run.
// It reads data/seed.json from the manga-voice-pages repo and writes the rows into the existing tables.
// Safe to run again: it removes what it added before (and any blank rows) before adding.
interface TableSpec {
  name: string;
  key: string;   // ID column used to find rows this script added earlier
  min: number;   // -1 = replace every row; otherwise replace rows whose key is >= min
  dates: string[];
  cols: string[];
  rows: (string | number | boolean)[][];
}
interface SeedData {
  bj: boolean;
  tables: TableSpec[];
}

async function main(workbook: ExcelScript.Workbook) {
  const resp = await fetch("https://raw.githubusercontent.com/feotro23/manga-voice-pages/main/data/seed.json?v=" + Date.now());
  const data: SeedData = await resp.json();
  const report: string[] = [];
  const stamp = Date.now().toString(36);
  let serial = 0;

  for (const spec of data.tables) {
    const tbl = workbook.getTable(spec.name);
    if (!tbl) {
      report.push(spec.name + ": TABLE NOT FOUND");
      continue;
    }
    const header = tbl.getHeaderRowRange().getValues()[0].map((cell) => String(cell));
    const oldRows = tbl.getRangeBetweenHeaderAndTotal().getValues();
    const keyIndex = header.indexOf(spec.key);

    // rows to remove afterwards: blank rows, plus rows this script owns
    const drop: number[] = [];
    oldRows.forEach((row, index) => {
      const blank = row.every((cell) => cell === "");
      if (blank || spec.min < 0 || (keyIndex >= 0 && Number(row[keyIndex]) >= spec.min)) {
        drop.push(index);
      }
    });

    // new rows in the sheet's column order; Power Apps needs a unique __PowerAppsId__ on each row
    const newRows = spec.rows.map((row) => header.map((name) => {
      if (name === "__PowerAppsId__") {
        serial = serial + 1;
        return "mv" + stamp + serial.toString(36);
      }
      const pos = spec.cols.indexOf(name);
      return pos < 0 ? "" : row[pos];
    }));

    for (let start = 0; start < newRows.length; start += 100) {
      tbl.addRows(-1, newRows.slice(start, start + 100));
    }
    for (let k = drop.length - 1; k >= 0; k--) {
      tbl.deleteRowsAt(drop[k], 1);
    }
    for (const colName of spec.dates) {
      const col = tbl.getColumnByName(colName);
      if (col) {
        col.getRangeBetweenHeaderAndTotal().setNumberFormat("yyyy-mm-dd hh:mm");
      }
    }
    report.push(spec.name + ": removed " + drop.length + ", added " + newRows.length + ", now " + tbl.getRowCount());
  }
  console.log(report.join("\n"));
}
