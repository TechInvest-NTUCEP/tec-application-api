const router = require('@koa/router')()

const middlewares = require('../utils/middlewares')

router.use(middlewares.auth.required)
router.use(middlewares.auth.isAdmin)

router.use('/users', require('./controllers/users').routes())
router.use('/reviews', require('./controllers/reviews').routes())

module.exports = router
