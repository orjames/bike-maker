'use strict';
module.exports = (sequelize, DataTypes) => {
  const bike = sequelize.define('bike', {
    manufacturer: DataTypes.STRING,
    year: DataTypes.INTEGER,
    model: DataTypes.STRING,
    size: DataTypes.INTEGER
  }, {});
  bike.associate = function(models) {
    // associations can be defined here
  };
  return bike;
};