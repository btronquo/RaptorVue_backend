'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      { name: 'tv', createdAt: Date.now(), updatedAt: Date.now() },
      { name: 'radio', createdAt: Date.now(), updatedAt: Date.now() },
      { name: 'phone', createdAt: Date.now(), updatedAt: Date.now() },
      { name: 'light', createdAt: Date.now(), updatedAt: Date.now() }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Product', null, {})
  }
}
