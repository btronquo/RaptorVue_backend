'use strict'
module.exports = (sequelize, DataTypes) => {
  var Environment = sequelize.define('Environment', {
    name: {
      type: DataTypes.STRING,
      required: true
    }
  }, {})
  Environment.associate = function (models) {
    // associations can be defined here
  }
  return Environment
}
