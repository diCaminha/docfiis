const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const Fii = require('../src/models/Fii');



const path2file = path.resolve(__dirname, '..','fiis.txt');

fs.createReadStream(path2file)
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
    //Fii.create(row);

  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });