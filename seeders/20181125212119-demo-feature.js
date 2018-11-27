'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Features', [
      { version: '18-E', name: 'Un membre touche sa telecommande', comment: 'alors ca marche?', createdAt: new Date(), updatedAt: new Date() },
      { version: '18-A', name: 'Un membre', comment: 'alors ca marche?', createdAt: new Date(), updatedAt: new Date() },
      { version: '18-C', name: 'Un Agent', comment: 'alors ca marche?', createdAt: new Date(), updatedAt: new Date() },
      { version: '18-R', name: 'Un Monsieur', comment: 'alors ca marche?', createdAt: new Date(), updatedAt: new Date() },
      { version: '18-J', name: 'Une Dame', comment: 'alors ca marche?', createdAt: new Date(), updatedAt: new Date() }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Features', null, {})
  }
}
