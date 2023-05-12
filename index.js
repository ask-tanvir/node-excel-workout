const ExcelJS = require('exceljs');
const workbook = new ExcelJS.Workbook();
const sheet = workbook.addWorksheet('My Sheet');
sheet.columns = [
  { header: 'Id', key: 'id', width: 10 },
  { header: 'Name', key: 'name', width: 32 },
  { header: 'D.O.B.', key: 'DOB', width: 10, outlineLevel: 1 }
];

sheet.addRows([
  {
    id: 1, name: 'Tanvir', DOB: new Date()
  },
  {
    id: 2, name: 'Biplab', DOB: new Date()
  }
]);

workbook.xlsx.writeFile('data.xlsx');
