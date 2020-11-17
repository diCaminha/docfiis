const Fii = require("../src/models/Fii");
require("../src/database");

getDocs = async () => {
  const fiis = await Fii.findAll();
  console.log(fiis.length);
};

getDocs();
