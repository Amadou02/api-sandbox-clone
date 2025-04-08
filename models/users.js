"use strict";
const { Model, Sequelize } = require("sequelize");
/**
 *
 * @param {Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init(
    {
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      underscored: true,
      freezeTableName: true,
      timestamps: false,
    }
  );
  return users;
};
