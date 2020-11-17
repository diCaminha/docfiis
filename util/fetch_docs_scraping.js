const Fii = require("../src/models/Fii");
const scrapingFii = require("../util/scraping_fii");
require("../src/database");

getDocs = async () => {
  const fiis = await Fii.findAll();
  fiis.forEach((fii) => {
    if (fii.code === "XPLG11") scrapingFii.getDocumentsByFii(fii.code);
  });
  console.log(fiis.length);
};

getDocs();
