'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     return await queryInterface.bulkInsert('pessoas', [
       {
       nome: 'Ana Souza',
       ativo: true,
       email: 'ana@ana.com',
       role: 'estudante',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        nome: 'Marcos Cintra',
        ativo: true,
        email: 'marcos@marcos.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        nome: 'Felipe Cardoso',
        ativo: true,
        email: 'felipe@felipe.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        nome: 'Sandra Gomes',
        ativo: true,
        email: 'sandra@sandra.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        nome: 'Paula Morais',
        ativo: true,
        email: 'paula@paula.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        nome: 'Sergio Lopes',
        ativo: true,
        email: 'sergio@sergio.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
       },

    
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
    return await queryInterface.bulkDelete('pessoas', null, {});
   
  }
};
