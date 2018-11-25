'use strict';
module.exports = (sequelize, DataTypes) => {
  const Feature = sequelize.define('Feature', {
    version: DataTypes.STRING,
    name: DataTypes.STRING,
    comment: DataTypes.STRING,
    forproduct: DataTypes.STRING
  }, {});
  Feature.associate = function(models) {
    // associations can be defined here
  };
  return Feature;
};