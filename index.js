const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const { generateExcel, uploadExcel } = require('./excel');

const PORT = 4777;

app.get('/excel', async (req, res) => {
  await generateExcel();
  return res.download('data.xlsx', (error) => {
    console.log("error", error);
  })
})

app.post('/upload', fileUpload(), async (req, res) => {
  await uploadExcel(req.files.file.data)
  return res.json({
    message: "Excel uploaded successfully"
  })
})

app.listen(PORT, () => {
  console.log(`Server is running at localhost:${PORT}`);
})
