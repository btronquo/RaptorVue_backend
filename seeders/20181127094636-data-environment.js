'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Environments', [
      { name: 'production', createdAt: Date.now(), updatedAt: Date.now() },
      { name: 'recette', createdAt: Date.now(), updatedAt: Date.now() },
      { name: 'local', createdAt: Date.now(), updatedAt: Date.now() },
      { name: 'other', createdAt: Date.now(), updatedAt: Date.now() }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Environment', null, {})
  }
}
