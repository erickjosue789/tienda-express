var express = require('express');
var router = express.Router();
const db = require('../models');
const producto = require('../models/producto');

// Asegúrate de que los modelos están definidos correctamente en `db`
const { Cliente, Pedido, Producto, ProductoPedido } = db;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tienda Express' });
});

router.get('/clientes/json', function(req, res, next) {
  Cliente.findAll({
    attributes: { exclude: ["updatedAt"] },
  })
  .then(cliente => {
    res.json(cliente);
  })
  .catch(error => res.status(400).send(error))
});

router.get('/clientes', function(req, res, next) {
  Cliente.findAll({
    attributes: { exclude: ["updatedAt"] },
  })
  .then(cliente => {
    res.render('clientes', { title: 'Clientes', arrClientes: cliente });
  })
  .catch(error => res.status(400).send(error))
});



router.get('/productos/json', function(req, res, next) {
  Producto.findAll({
    attributes: { exclude: ["updatedAt"] },
  })
  .then(producto => {
    res.json(producto);
  })
  .catch(error => res.status(400).send(error))
});

router.get('/productos', function(req, res, next) {
  Producto.findAll({
    attributes: { exclude: ["updatedAt"] },
  })
  .then(producto => {
    res.render('productos', { title: 'Productos', arrProductos: producto });
  })
  .catch(error => res.status(400).send(error))
});


router.get('/pedidos/json', function(req, res, next) {
  ProductoPedido.findAll({
    attributes: { exclude: ["updatedAt", "createdAt",  "id_producto", "id_pedido"] },
    include: [
      {
        model: Producto,
        attributes: ['descripcion']
      },
      {
        model: Pedido,
        attributes: { exclude: ["updatedAt", "createdAt", "id_cliente"] },
        include: [
          {
            model: Cliente,
            attributes: { exclude: ["updatedAt", "createdAt"] },
            attributes: ['nombre', 'apellido']
          }
        ]
      },
    ]
  })
  .then(pedido => {
    res.json(pedido);
  })
  .catch(error => {
    res.status(400).send(error);
  });
});


router.get('/pedidos', function(req, res, next) {
  ProductoPedido.findAll({
    attributes: { exclude: ["updatedAt", "createdAt",  "id_producto", "id_pedido"] },
    include: [
      {
        model: Producto,
        attributes: ['descripcion']
      },
      {
        model: Pedido,
        attributes: { exclude: ["updatedAt", "createdAt", "id_cliente"] },
        include: [
          {
            model: Cliente,
            attributes: { exclude: ["updatedAt", "createdAt"] },
            attributes: ['nombre', 'apellido']
          }
        ]
      },
    ]
  })
  .then(pedido => {
    res.render('pedidos', { title: 'Pedidos', arrPedidos: pedido });
  })
  .catch(error => {
    res.status(400).send(error);
  });
});

module.exports = router;