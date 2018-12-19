require('dotenv').config()

module.exports = {
  'development': {
    'username': process.env.DB_USER,
    'password': process.env.DB_PASS,
    'database': process.env.DB_NAME,
    'host': process.env.DB_HOST,
    'dialect': process.env.DB_DIALECT
  },
  'test': {
    'username': process.env.DB_USER,
    'password': process.env.DB_PASS,
    'database': process.env.DB_NAME,
    'host': process.env.DB_HOST,
    'dialect': process.env.DB_DIALECT
  },
  'production': {
    'use_env_variable': 'MYSQL_URL',
    'dialect': 'mysql'
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
