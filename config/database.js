const config = require('config')

module.exports = {
  database: config.get('postgresql.database'),
  username: config.get('postgresql.username'),
  password: config.get('postgresql.password'),
  host: config.get('postgresql.host'),
  port: config.get('postgresql.port'),
  dialect: config.get('postgresql.dialect'),
  pool: config.get('postgresql.pool'),
  dialectOptions: {
    ssl: {
      require: config.get('postgresql.ssl'),
      rejectUnauthorized: false
    }
  },
  define: {
    paranoid: true,
    timestamp: true
  }
}
