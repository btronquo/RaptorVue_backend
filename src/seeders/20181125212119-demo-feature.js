'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Features', [{
        version: '18-E',
        name: 'Un membre toutche sa telecommande',
        comment: 'alors ca marche?',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Features', null, {});
  }
};
