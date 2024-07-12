'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const tableDefinition = await queryInterface.describeTable('productopedidos');

    if (!tableDefinition.id_pedido) {
      try {
        console.log('Añadiendo columna id_pedido a la tabla productopedidos');
        await queryInterface.addColumn('productopedidos', 'id_pedido', {
          type: Sequelize.INTEGER,
          references: {
            model: 'pedidos',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
        console.log('Columna id_pedido añadida correctamente');
      } catch (error) {
        console.error('Error al añadir la columna id_pedido:', error);
        throw error;
      }
    } else {
      console.log('La columna id_pedido ya existe en la tabla productopedidos');
    }

    if (!tableDefinition.id_producto) {
      try {
        console.log('Añadiendo columna id_producto a la tabla productopedidos');
        await queryInterface.addColumn('productopedidos', 'id_producto', {
          type: Sequelize.INTEGER,
          references: {
            model: 'productos',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
        console.log('Columna id_producto añadida correctamente');
      } catch (error) {
        console.error('Error al añadir la columna id_producto:', error);
        throw error;
      }
    } else {
      console.log('La columna id_producto ya existe en la tabla productopedidos');
    }
  },

  async down (queryInterface, Sequelize) {
    const tableDefinition = await queryInterface.describeTable('productopedidos');

    if (tableDefinition.id_pedido) {
      try {
        console.log('Eliminando columna id_pedido de la tabla productopedidos');
        await queryInterface.removeColumn('productopedidos', 'id_pedido');
        console.log('Columna id_pedido eliminada correctamente');
      } catch (error) {
        console.error('Error al eliminar la columna id_pedido:', error);
        throw error;
      }
    } else {
      console.log('La columna id_pedido no existe en la tabla productopedidos');
    }

    if (tableDefinition.id_producto) {
      try {
        console.log('Eliminando columna id_producto de la tabla productopedidos');
        await queryInterface.removeColumn('productopedidos', 'id_producto');
        console.log('Columna id_producto eliminada correctamente');
      } catch (error) {
        console.error('Error al eliminar la columna id_producto:', error);
        throw error;
      }
    } else {
      console.log('La columna id_producto no existe en la tabla productopedidos');
    }
  
  }
};
