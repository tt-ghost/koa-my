const session = require('koa-session')
const SQLStore = require('koa-mysql-session')
const db = require('../config/db')

// init db
const sessionConf = {
  ...db
}

// cookie config
const cookieConf = {
  maxAge: '', // cookie有效时长
  expires: '', // cookie失效时间
  path: '/', // 写cookie所在的路径
  domain: '', // 写cookie所在的域名
  httpOnly: true, // 是否只用于http请求中获取
  overwrite: '', // 是否允许重写
  secure: '',
  sameSite: '',
  signed: ''
}

// 配置 session 中间件
module.exports = app => {
  app.use(session({
    key: 'KOA_STARTKIT',
    maxAge: 86400000,
    autoCommit: true, // (boolean) automatically commit headers (default true
    overwrite: true, // (boolean) can overwrite or not (default true)
    httpOnly: true, // (boolean) httpOnly or not (default true)
    signed: true, // (boolean) signed or not (default true)
    rolling: false,
    renew: false,
    cookie: cookieConf,
    store: new SQLStore(sessionConf)
  }, app))
}
