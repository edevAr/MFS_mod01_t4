var express = require('express');

var router = express.Router();

var { obtenerPedidos, actualizarPedido, eliminarPedido, crearPedido } = require('../controllers/pedido');
router.get('/', obtenerPedidos);
router.put('/:id', actualizarPedido); 
router.delete('/:id', eliminarPedido); 
router.post('/', crearPedido);
module.exports = router;
