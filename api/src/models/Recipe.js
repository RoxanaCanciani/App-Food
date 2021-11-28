const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    healthScore : {
      type: DataTypes.INTEGER,
      allowNull:true,
    },
    spoonacularScore : {
      type: DataTypes.INTEGER,
      allowNull:true,
    },
    
    analyzedInstructions:{
      type : DataTypes.STRING,
      allowNull:true,
    },
    
    createdInBd:{
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true,
    }
    
  });
};
