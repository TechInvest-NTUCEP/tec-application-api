const router = require('@koa/router')()
const responseHandler = require('@utils/responseHandlers')

router.prefix('/api/v1')

router.use('/auth', require('./auth').routes())
router.use('/console', require('./console').routes())
router.use('/applications', require('./applications').routes())
router.use('/reviews', require('./reviews').routes())

router.get('/healthcheck', (ctx) => {
  responseHandler.success(ctx, 200, {})
})

module.exports = router
