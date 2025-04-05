const { Pedido } = require('../models');

exports.obtenerPedidos = async (req, res) => 
{ 
    const pedidos = await Pedido.findAll(); 
    res.json(pedidos);
};

exports.crearPedido = async (req, res) => 
{ 
    const pedido = await Pedido.create(req.body); 
    res.status(201).json(pedido);
};
exports.actualizarPedido = async (req, res) => 
    { 
        try {
            const { id } = req.params;
        
            const [updated] = await Pedido.update(req.body, {
              where: { id }
            });
        
            if (updated) {
              const pedidoActualizado = await Pedido.findByPk(id);
              console.log("actualizado");
              res.status(200).json(pedidoActualizado);
            } else {
                console.log("no actualizado");
              res.status(404).json({ mensaje: 'Pedido no encontrado' });
            }
          } catch (error) {
            console.error('Error al actualizar el pedido:', error);
            res.status(500).json({ mensaje: 'Error del servidor' });
        }
    };
    exports.eliminarPedido = async (req, res) => 
    { 
        try {
            const { id } = req.params;
        
            // Buscar si el pedido existe
            const pedido = await Pedido.findByPk(id);
        
            if (!pedido) {
              return res.status(404).json({ mensaje: 'Pedido no encontrado' });
            }
        
            // Eliminar el pedido
            await pedido.destroy();
        
            res.status(200).json({ mensaje: 'Pedido eliminado exitosamente' });
          } catch (error) {
            console.error('Error al eliminar el pedido:', error);
            res.status(500).json({ mensaje: 'Error del servidor' });
          }
    };