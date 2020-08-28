const Usuario = require('../models/Usuario')

module.exports = {
    async store(req, res) {
        const { nome, senha } = req.body
        const usuario = await Usuario.create({ nome, senha })

        return res.json(usuario)
    },

    async index(req, res) {
        const usuarios = await Usuario.findAll()

        return res.json(usuarios)
    }
}