'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductoPedido extends Model {
    static associate(models) {
      ProductoPedido.belongsTo(models.Pedido, {
        foreignKey: 'id_pedido'
      });
      ProductoPedido.belongsTo(models.Producto, {
        foreignKey: 'id_producto'
      });
    }
  }
  ProductoPedido.init({
    id_producto: DataTypes.INTEGER,
    id_pedido: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'ProductoPedido',
    tableName: 'productopedidos'
  });
  return ProductoPedido;
};