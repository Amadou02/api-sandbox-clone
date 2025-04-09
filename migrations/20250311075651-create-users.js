'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').DataTypes} DataTypes
   * @returns void
   */
  // ignore no-unused-vars
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      }
    });
  },

  /**
   *
   * @param {QueryInterface} queryInterface
   * @param {import('sequelize').DataTypes} DataTypes
   * @returns void
   */
  async down(queryInterface, _DataTypes) {
    await queryInterface.dropTable('users');
  }
};
