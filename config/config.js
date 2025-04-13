require('dotenv').config();
const config = process.env;

module.exports = {
  development: {
    username: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    host: config.DB_HOST,
    dialect: 'postgres'
  },
  test: {
    // username: 'postgres',
    // password: 'postgres',
    // database: 'postgres',
    // host: '127.0.0.1',
    // port: 5432,
    username: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    host: config.DB_HOST,
    port: config.DB_PORT,
    dialect: 'postgres'
  },
  production: {
    username: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    host: config.DB_HOST,
    dialect: 'postgres'
  }
};
