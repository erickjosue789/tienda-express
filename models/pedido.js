'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    static associate(models) {
      Pedido.belongsTo(models.Cliente, {
        foreignKey: 'id_cliente'
      });
      Pedido.belongsToMany(models.Producto, { through: models.ProductoPedido, foreignKey: 'id_pedido' });
    }
  }
  Pedido.init({
    id_cliente: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pedido',
    tableName: 'pedidos'
  });
  return Pedido;
};