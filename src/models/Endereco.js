const { Model, DataTypes } = require('sequelize')

class Endereco extends Model {
    static init(sequelize) {
        super.init({
            logradouro: DataTypes.STRING,
            numero: DataTypes.STRING,
            cep: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'enderecos'
        })
    }

    static associate(models) {
        this.belongsTo(models.Usuario, {foreignKey: 'usuario_id', as: 'rel_usuario'})
    }
}

module.exports = Endereco