'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    Cliente = sequelize.define("Cliente", 
      { 
          nombre: DataTypes.STRING,
          correo: DataTypes.STRING 
      });
    static associate(models) {
      // define association here
    }
  }
  
  Cliente.associate = (models) => 
  { 
    Cliente.hasMany(models.Pedido, 
    { 
      foreignKey: "clienteId" 
    });
  };
 
  Cliente.init({
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};