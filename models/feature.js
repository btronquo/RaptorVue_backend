'use strict'
module.exports = (sequelize, DataTypes) => {
  const Feature = sequelize.define('Feature', {
    version: DataTypes.STRING,
    name: DataTypes.STRING,
    comment: DataTypes.STRING,
    forproduct: DataTypes.INTEGER
  }, {})
  Feature.associate = function (models) {
    // la feature dois contenir le forproduct, qui est l'id du product pour lequel elle est dispo
    // Feature.hasMany(models.Product, { foreignKey: 'userId' })
  }
  return Feature
}
