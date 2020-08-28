'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cores', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: true
      } 
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cores')
  }
};
