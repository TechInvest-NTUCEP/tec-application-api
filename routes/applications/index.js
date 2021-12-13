const router = require('@koa/router')()

const controllers = require('./controllers')
const middlewares = require('../utils/middlewares')

router.get('/access', controllers.GetByToken)

router.use(middlewares.auth.required)
router.get('/:id', controllers.GetById)
router.post('/create', controllers.create)
router.patch('/:id', controllers.PatchById)

module.exports = router
