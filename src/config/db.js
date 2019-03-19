
const DB_CONFIG = {
  dev: {
    database: 'koa_startkit',
    user: 'root',
    password: '123456',
    port: '3306',
    host: 'localhost'
  },
  prod: {
    database: 'koa_startkit',
    user: 'root',
    password: '123456',
    port: '3306',
    host: 'localhost'
  }
}

module.exports = DB_CONFIG[process.env.NODE_ENV]