
module.exports = {
  app: {
    name: 'NTU-TEC-API'
  },
  postgresql: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    ssl: Boolean(process.env.DB_SSL) || false,
    dialectOptions: {
      ssl: {
        require: Boolean(process.env.DB_SSL) || false,
        rejectUnauthorized: false
      }
    },

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  secret: {
    token: process.env.TOKEN_SECRET || 'RSCCKRhXL3eVD9MjMs3jNpPc3NaJM4kv',
    password: process.env.PASSWORD_SECRET || 'eVD9MjMs3jNpPcRSCCKRhXL33NaJM4kv',
    shareToken: process.env.SHARE_TOKEN || 'RSCCKRhXLNaJMaJML33NaJMs3jNpPc'
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID || '228793566317-3fbln0h9nric64456qvn3njnofhcsu6r.apps.googleusercontent.com'
  }
}
