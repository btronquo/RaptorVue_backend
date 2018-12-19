'use strict'
module.exports = (sequelize, DataTypes) => {
  const Feature = sequelize.define('Feature', {
    version: {
      type: DataTypes.STRING,
      required: true
    },
    name: {
      type: DataTypes.STRING,
      required: true
    },
    comment: DataTypes.STRING,
    forproduct: DataTypes.INTEGER
  }, {})
  Feature.associate = function (models) {
  }
  return Feature
}
