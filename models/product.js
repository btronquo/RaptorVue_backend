'use strict'
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      required: true
    },
    comment: {
      type: DataTypes.STRING,
      required: true
    }
  }, {})
  Product.associate = function (models) {
    // associations can be defined here
  }
  return Product
}
