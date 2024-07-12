'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let nombres = ['Erick', 'Ivanna', 'Carlos', 'Cristhian', 'Jose', 'Vicente', 'Carmen'];
    let apellidos = ['Gonzalez', 'Valdiviezo', 'Molina', 'Ramirez', 'Espinoza', 'Delgado'];

    for (let i = 0; i < 10; i++) {
      await queryInterface.bulkInsert('clientes', [{
        nombre: nombres[Math.floor(Math.random() * nombres.length)],
        apellido: apellidos[Math.floor(Math.random() * apellidos.length)],
        createdAt: new Date(),
        updatedAt: new Date()
      }],{});
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});
  }
};
