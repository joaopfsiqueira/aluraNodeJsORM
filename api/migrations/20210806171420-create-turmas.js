'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Turmas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_inicio: {
        type: Sequelize.DATEONLY
      },
      //FOREIGN KEY
      docente_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Pessoas', key: 'id'}
      },
      //FOREIGN KEY
      nivel_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Niveis', key: 'id'}
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
    await queryInterface.dropTable('Turmas');
  }
};