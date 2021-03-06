require('dotenv-flow').config()
require('module-alias/register')

const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const compress = require('koa-compress')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')

const api = require('./routes')

// middlewares
app.use(compress())
app.use(bodyparser({
  enableTypes: ['json']
}))
app.use(json())
app.use(logger())
app.use(cors())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// Error handler
app.use(require('./infra/utils/responseHandlers').error)

// routes
app.use(api.routes())

module.exports = app
