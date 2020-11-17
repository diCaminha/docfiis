const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

const path2file = path.resolve(__dirname, '..','fiis.txt');

fs.createReadStream(path2file)
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });