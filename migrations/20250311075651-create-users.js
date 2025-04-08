"use strict";

const { QueryInterface } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   *
   * @param {QueryInterface} queryInterface
   * @param {import('sequelize').DataTypes} DataTypes
   * @returns void
   */
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    });
  },

  /**
   *
   * @param {QueryInterface} queryInterface
   * @param {import('sequelize').DataTypes} DataTypes
   * @returns void
   */
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("users");
  },
};
