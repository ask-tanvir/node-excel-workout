const ExcelJS = require('exceljs');
const workbook = new ExcelJS.Workbook();
const sheet = workbook.addWorksheet('My Sheet');
sheet.addTable({
  name: 'MyTable',
  ref: 'A1',
  headerRow: true,
  totalsRow: true,
  columns: [
    {name: 'Subject', totalsRowLabel: 'Sum:'},
    {name: 'Mark', totalsRowFunction: 'sum', filterButton: true},
  ],
  rows: [
    ["English", 70.10],
    ["Bangla", 70],
    ["Math", 90],
		["Science", 85],
  ]
});

workbook.xlsx.writeFile('data.xlsx');
