require('dotenv').config();
const fs = require('fs');

module.exports = {
  port: process.env.PORT || 8081,
    development: {
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_KEY,
      database: process.env.MYSQL_DBNAME,
      host: process.env.MYSQL_HOST,
      dialect: 'mysql'
    },
    test: {
      username: 'database_test',
      password: null,
      database: 'database_test',
      host: '127.0.0.1',
      dialect: 'mysql'
    },
    production: {
      username: 'database_test',
      password: null,
      database: 'database_test',
      host: '127.0.0.1',
      dialect: 'mysql'
    }
};
