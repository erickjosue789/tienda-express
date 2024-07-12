'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let cantidad = 0;
    let precio = 0;

    for (let i = 0; i < 10; i++) {
      cantidad = Math.floor(Math.random() * 10);
      precio = Math.floor(Math.random() * 30);

      await queryInterface.bulkInsert('productos', [{
        descripcion: 'Producto ' + i,
        precio: precio,
        stock: cantidad,
        createdAt: new Date(),
        updatedAt: new Date()
      }],{});
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('productos', null, {});
  }
};
