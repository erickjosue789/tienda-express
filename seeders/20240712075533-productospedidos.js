'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    let [productos, productos_metadata] = await queryInterface.sequelize.query('SELECT * FROM productos');
    let [pedidos, pedidos_metadata] = await queryInterface.sequelize.query('SELECT * FROM pedidos');
    let iproducto = 0;

    for (let i = 0; i < pedidos.length; i++) {
      iproducto = Math.floor(Math.random() * productos.length);
      await queryInterface.bulkInsert('productopedidos', [{
        id_producto: productos[iproducto].id,
        id_pedido: pedidos[i].id,
        cantidad: Math.floor(Math.random() * productos.length),
        precio: productos[iproducto].precio * iproducto,
        createdAt: new Date(), 
        updatedAt: new Date()
      }], {});
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('productopedidos', null, {});
  }
};
