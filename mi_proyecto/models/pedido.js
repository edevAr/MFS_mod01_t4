'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    Pedido = sequelize.define("Pedido", 
      { 
        fecha: DataTypes.DATE,
        total: DataTypes.FLOAT
      }
    );
    static associate(models) {
      // define association here
    }
  }

  Pedido.associate = (models) => { 
    Pedido.belongsTo(models.Cliente, 
      { 
        foreignKey: "clienteId" 
      });
  };

  Pedido.init({
    fecha: DataTypes.DATE,
    total: DataTypes.FLOAT,
    clienteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};