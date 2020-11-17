"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("fiis", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      adm: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      manager: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('fiis');
  },
};
