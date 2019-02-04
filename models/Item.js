'use strict'
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    version: DataTypes.STRING,
    name: DataTypes.STRING,
    comment: DataTypes.STRING,
    forproduct: DataTypes.INTEGER
  }, {})
  Item.associate = function(models) {
  }
  
  return Item;
}
