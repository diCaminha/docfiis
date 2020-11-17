const Sequelize = require('sequelize');

const dbConfig = require('../config/database');
const Documento = require('../models/Documento');
const Fii = require('../models/Fii');
const User = require('../models/User');

const connection = new Sequelize(dbConfig);

//init in all entities
User.init(connection);
Fii.init(connection);
Documento.init(connection);

//associacoes
Documento.associate(connection.models);

module.exports = connection;