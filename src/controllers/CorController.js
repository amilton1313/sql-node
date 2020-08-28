const Cor = require('../models/Cor')

module.exports = {
    async store(req, res) {
        const { descricao } = req.body
        const cor = await Cor.create({ descricao })

        return res.json(cor)
    },

    async index(req, res) {
        const cores = await Cor.findAll()

        return res.json(cores)
    }
}