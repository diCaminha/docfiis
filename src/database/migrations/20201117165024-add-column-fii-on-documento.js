"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("documentos", "fii_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "fiis", key: "id" },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("documentos", "fii_id");
  },
};
