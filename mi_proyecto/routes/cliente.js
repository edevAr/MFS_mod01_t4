var express = require('express');

var router = express.Router();
/*router.get('/', function(req, res, next) {
    res.send('respond with a client');
});*/

var { obtenerClientes, actualizarCliente, crearCliente, eliminarCliente } = require('../controllers/cliente');

router.get('/', obtenerClientes); 
router.put('/:id', actualizarCliente); 
router.delete('/:id', eliminarCliente); 
router.post('/', crearCliente);

module.exports = router;