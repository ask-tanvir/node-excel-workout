const ExcelJS = require('exceljs');

exports.generateExcel = async () => {

	const workbook = new ExcelJS.Workbook();
	const sheet = workbook.addWorksheet('My Sheet');
	sheet.addTable({
		name: 'MyTable',
		ref: 'A1',
		headerRow: true,
		totalsRow: true,
		columns: [
			{ name: 'Subject', totalsRowLabel: 'Sum:' },
			{ name: 'Mark', totalsRowFunction: 'sum', filterButton: true },
		],
		rows: [
			["English", 70.10],
			["Bangla", 70],
			["Math", 90],
			["Science", 85],
		]
	});

	return workbook.xlsx.writeFile('data.xlsx');

}

exports.uploadExcel = async (data) => {
	const workbook = new ExcelJS.Workbook();
	const sheetFile = await workbook.xlsx.load(data);
	const worksheet = sheetFile.getWorksheet();
	worksheet.eachRow(function(row, rowNumber) {
		console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values));
	});
}

