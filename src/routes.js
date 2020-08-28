const express = require('express')
const UsuarioController = require('./controllers/UsuarioController')
const CorController = require('./controllers/CorController')

const routes = express.Router()

routes.post('/usuarios', UsuarioController.store)
routes.get('/usuarios', UsuarioController.index)

routes.post('/cores', CorController.store)
routes.get('/cores', CorController.index)

module.exports = routes