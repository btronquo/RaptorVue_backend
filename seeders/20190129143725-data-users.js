'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { email: 'demo@btrn.fr',firstname: 'John',lastname: 'Doe', password: '$2a$08$EM03ohmXvhAUhupbHm3O4O9q4Naaj.AYQsrfie9AhKALqi7xFmwZ6', createdAt : new Date(), updatedAt : new Date() }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
