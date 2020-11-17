const puppeteer = require("puppeteer");

exports.getDocumentsByFii = async (fii) => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(`https://www.fundsexplorer.com.br/funds/${fii}`);

  const result = await page.evaluate(() => {
    const links = document.getElementsByClassName("bulletin-text-link");
    const documentos = [];

    for (let i = 0; i < links.length; i++) {
      let linkDoc = links[i].getAttribute("href");
      let titulo = links[i].innerHTML;
      let docId = links[i].getAttribute("href").split("id=")[1];
      let doc = { link: linkDoc, titulo: titulo, docId: docId };
      documentos.push(doc);
    }

    return documentos;
  });
  console.log(result);

  browser.close();
  return result;
};
