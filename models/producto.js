'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    static associate(models) {
      Producto.belongsToMany(models.Pedido, { through: models.ProductoPedido, foreignKey: 'id_producto' });
    }
  }
  Producto.init({
    descripcion: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Producto',
    tableName: 'productos'
  });
  return Producto;
};