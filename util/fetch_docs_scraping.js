const Fii = require("../src/models/Fii");
const scrapingFii = require("../util/scraping_fii");
require("../src/database");

getDocs = async () => {
  const fiis = await Fii.findAll();
  fiis.forEach(async (fii) => {
    if (fii.code === "XPLG11") {
      const docs = await scrapingFii.getDocumentsByFii(fii.code);
      console.log(docs);
    }
  });
  console.log(fiis.length);
};

getDocs();
