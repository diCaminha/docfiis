const Documento = require("../src/models/Documento");
const Fii = require("../src/models/Fii");
const scrapingFii = require("../util/scraping_fii");
require("../src/database");

getDocs = async () => {
  const fiis = await Fii.findAll();
  fiis.forEach(async (fii) => {
    if (fii.code === "XPIN11") {
      const docs = await scrapingFii.getDocumentsByFii(fii.code);
      docs.forEach(async (documento) => {
        await Documento.findOrCreate({
          where: {
            docId: documento.docId,
          },
          defaults: {
            link: documento.link,
            docId: documento.docId,
            titulo: documento.titulo,
            fii_id: fii.id,
          },
        });
      });
    }
  });
};

getDocs();
