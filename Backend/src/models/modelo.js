const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // definir el modelo de mi tabla
  sequelize.define('tableName', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
