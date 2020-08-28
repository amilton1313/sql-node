const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Usuario = require('../models/Usuario')
const Cor = require('../models/Cor')

const connection = new Sequelize(dbConfig)

Usuario.init(connection)
Cor.init(connection)

module.exports = connection