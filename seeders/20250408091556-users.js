'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    const users = [
      { email: 'alice@example.com', password: 'password123' },
      { email: 'bob@example.com', password: 'bobSecure456' },
      { email: 'carol@example.com', password: 'carol789!' },
      { email: 'dave@example.com', password: 'dave_pass321' },
      { email: 'eve@example.com', password: 'evePassword!' },
      { email: 'frank@example.com', password: 'frank1234' },
      { email: 'grace@example.com', password: 'gracePwd987' },
      { email: 'heidi@example.com', password: 'heidi!pass' },
      { email: 'ivan@example.com', password: 'ivan_secure' },
      { email: 'judy@example.com', password: 'judy456pass' }
    ];

    await queryInterface.bulkInsert('users', users, {});
  },

  async down(queryInterface, _Sequelize) {
    // ignore no-unused-vars
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
