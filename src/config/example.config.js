module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'bdname',
    user: process.env.DB_USER || 'user',
    password: process.env.DB_PASS || '1234',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost'
    }
  }
}
