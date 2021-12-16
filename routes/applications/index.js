const router = require('@koa/router')()

const controllers = require('./controllers')
const middlewares = require('../utils/middlewares')

router.get('/access', controllers.GetByToken)

router.use(middlewares.auth.required)
router.get('/', controllers.GetAllByUserId)
router.get('/:id', controllers.GetById)
router.post('/create', controllers.create)
router.patch('/:id', controllers.PatchById)

router.post('/:id/share-token', controllers.GetShareToken)

module.exports = router
