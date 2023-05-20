const express = require('express');
const app = express();
const { generateExcel } = require('./excel');

const PORT = 4777;

app.get('/excel', async (req, res) => {
  await generateExcel();
  return res.download('data.xlsx', (error) => {
    console.log("error", error);
  })
})

app.listen(PORT, () => {
  console.log(`Server is running at localhost:${PORT}`);
})
