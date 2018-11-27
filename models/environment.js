'use strict'
module.exports = (sequelize, DataTypes) => {
  var Environment = sequelize.define('Environment', {
    name: DataTypes.STRING
  }, {})
  Environment.associate = function (models) {
    // associations can be defined here
  }
  return Environment
}
