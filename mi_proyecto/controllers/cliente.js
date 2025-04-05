const { Cliente } = require('../models');

exports.obtenerClientes = async (req, res) => 
{ 
    const clientes = await Cliente.findAll(); 
    res.json(clientes);
};

exports.crearCliente = async (req, res) => 
{ 
    const cliente = await Cliente.create(req.body); 
    res.status(201).json(cliente);
};
exports.actualizarCliente = async (req, res) => 
{ 
    try {
        const { id } = req.params;
    
        const [updated] = await Cliente.update(req.body, {
          where: { id }
        });
    
        if (updated) {
          const clienteActualizado = await Cliente.findByPk(id);
          console.log("actualizado");
          res.status(200).json(clienteActualizado);
        } else {
            console.log("no actualizado");
          res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }
      } catch (error) {
        console.error('Error al actualizar el cliente:', error);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
};
exports.eliminarCliente = async (req, res) => 
{ 
    try {
        const { id } = req.params;
    
        // Buscar si el cliente existe
        const cliente = await Cliente.findByPk(id);
    
        if (!cliente) {
          return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }
    
        // Eliminar el cliente
        await cliente.destroy();
    
        res.status(200).json({ mensaje: 'Cliente eliminado exitosamente' });
      } catch (error) {
        console.error('Error al eliminar el cliente:', error);
        res.status(500).json({ mensaje: 'Error del servidor' });
      }
};

