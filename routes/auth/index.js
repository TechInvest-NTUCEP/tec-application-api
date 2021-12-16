const router = require('@koa/router')()

const controllers = require('./controllers')
const middlewares = require('../utils/middlewares')

router.post('/google', controllers.google)

router.use(middlewares.auth.required)
router.get('/me', controllers.getMe)

module.exports = router
