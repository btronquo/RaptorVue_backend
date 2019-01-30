/**
 * @author Boris Tronquoy
 * @description seeds for user account (default password for accounts: pass)
 * @version 20193001
*/

'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { email: 'jdoe@btrn.fr',firstname: 'John',lastname: 'Doe', password: '$2a$08$EM03ohmXvhAUhupbHm3O4O9q4Naaj.AYQsrfie9AhKALqi7xFmwZ6', createdAt : new Date(), updatedAt : new Date() },
      { email: 'user@btrn.fr',firstname: 'User',lastname: 'Something', password: '$2a$08$EM03ohmXvhAUhupbHm3O4O9q4Naaj.AYQsrfie9AhKALqi7xFmwZ6', createdAt : new Date(), updatedAt : new Date() },
      { email: 'admin@btrn.fr',firstname: 'Admin',lastname: 'Admin', password: '$2a$08$EM03ohmXvhAUhupbHm3O4O9q4Naaj.AYQsrfie9AhKALqi7xFmwZ6', createdAt : new Date(), updatedAt : new Date() },
      { email: 'demo@btrn.fr',firstname: 'Paul',lastname: 'Dupont', password: '$2a$08$EM03ohmXvhAUhupbHm3O4O9q4Naaj.AYQsrfie9AhKALqi7xFmwZ6', createdAt : new Date(), updatedAt : new Date() },
      { email: 'olpr@btrn.fr',firstname: 'Olivier',lastname: 'Prost', password: '$2a$08$EM03ohmXvhAUhupbHm3O4O9q4Naaj.AYQsrfie9AhKALqi7xFmwZ6', createdAt : new Date(), updatedAt : new Date() }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
