require('dotenv').config()

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'raptor',
    user: process.env.DB_USER || 'raptor',
    password: process.env.DB_PASS || 'raptor',
    options: {
      dialect: process.env.DB_DIALECT || 'mysql',
      host: process.env.DB_HOST || 'localhost'
    }
  }
}
