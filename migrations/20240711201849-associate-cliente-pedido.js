'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tableDefinition = await queryInterface.describeTable('pedidos');

    if (!tableDefinition.id_cliente) {
      try {
        console.log('Añadiendo columna id_cliente a la tabla Pedidos');
        await queryInterface.addColumn('pedidos', 'id_cliente', {
          type: Sequelize.INTEGER,
          references: {
            model: 'clientes', // nombre de la tabla que referencia
            key: 'id',         // clave primaria de la tabla referenciada
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        });
        console.log('Columna añadida correctamente');
      } catch (error) {
        console.error('Error al añadir la columna:', error);
        throw error;
      }
    } else {
      console.log('La columna id_cliente ya existe en la tabla Pedidos');
    }
  },

  async down(queryInterface, Sequelize) {
    const tableDefinition = await queryInterface.describeTable('pedidos');

    if (tableDefinition.id_cliente) {
      try {
        console.log('Eliminando columna id_cliente de la tabla Pedidos');
        await queryInterface.removeColumn('pedidos', 'id_cliente');
        console.log('Columna eliminada correctamente');
      } catch (error) {
        console.error('Error al eliminar la columna:', error);
        throw error;
      }
    } else {
      console.log('La columna id_cliente no existe en la tabla Pedidos');
    }
  }

};
