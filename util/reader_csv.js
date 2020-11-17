const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const Fii = require('../src/models/Fii');
require('../src/database');


const path2file = path.resolve(__dirname, '..','fiis.txt');

fs.createReadStream(path2file)
  .pipe(csv())
  .on('data', async (row) => {
    const fiiSaved = await Fii.create(row);
    console.log(fiiSaved);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });