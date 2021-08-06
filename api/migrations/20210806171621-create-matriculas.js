'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Matriculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      //FOREIGN KEY
      estudante_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'pessoas', key: 'id'}
      },
      //FOREIGN KEY
      turma_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'turmas', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('matriculas');
  }
};