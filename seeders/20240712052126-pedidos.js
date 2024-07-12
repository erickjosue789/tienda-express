'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let estados = ['Entregado', 'Por enviar', 'Cancelado'];
    
    let [clientes, clientes_metadata] = await queryInterface.sequelize.query('SELECT id FROM clientes')

    for (let i = 0; i < 10; i++) {
      await queryInterface.bulkInsert('pedidos', [{
        id_cliente: clientes[Math.floor(Math.random() * clientes.length)].id, 
        fecha: new Date(), 
        estado: estados[Math.floor(Math.random() * estados.length)], 
        createdAt: new Date(), updatedAt: new Date()
      }], {});
    }
    
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pedidos', null, {});
  }
};
