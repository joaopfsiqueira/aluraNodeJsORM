'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Turmas', [
			{
				data_inicio: "2020-02-01",
				nivel_id: 1,
				docente_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()				 
			},
			{
				data_inicio: "2020-02-01",
				nivel_id: 2,
				docente_id: 5,
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				data_inicio: "2020-02-01",
				nivel_id: 3,
				docente_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				data_inicio: "2020-07-01",
				nivel_id: 3,
				docente_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()			
			}
		], {})
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Turmas', null, {})
  }
};
