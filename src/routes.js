const express = require('express')
const UsuarioController = require('./controllers/UsuarioController')
const CorController = require('./controllers/CorController')
const EnderecoController = require('./controllers/EnderecoController')

const routes = express.Router()

routes.post('/usuarios', UsuarioController.store)
routes.get('/usuarios', UsuarioController.index)

routes.post('/cores', CorController.store)
routes.get('/cores', CorController.index)


routes.post('/usuario/:usuario_id/enderecos', EnderecoController.store)
routes.get('/enderecos', EnderecoController.index)

module.exports = routes