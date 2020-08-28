const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Usuario = require('../models/Usuario')
const Cor = require('../models/Cor')
const Endereco = require('../models/Endereco')

const connection = new Sequelize(dbConfig)

Usuario.init(connection)
Cor.init(connection)
Endereco.init(connection)

Endereco.associate(connection.models)

module.exports = connection