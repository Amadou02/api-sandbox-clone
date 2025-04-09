'use strict';
const { Model } = require('sequelize'); // ignore no-unused-vars
/**
 *
 * @param {import('sequelize').Sequelize} sequelize
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
    static associate() {
      // define association here
    }
  }
  users.init(
    {
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      underscored: true,
      freezeTableName: true,
      timestamps: false
    }
  );
  return users;
};
