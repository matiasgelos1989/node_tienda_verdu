const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedido.controller');
const authenticationToken = require('../middleware/authenticationToken');

router.get('/pedidos', pedidoController.getAllPedidos)
router.post('/pedidos', pedidoController.createPedido)
router.put('/pedidos/:id', pedidoController.updatePedido)
router.delete('/pedidos/:id', pedidoController.deletePedido)

module.exports = router;