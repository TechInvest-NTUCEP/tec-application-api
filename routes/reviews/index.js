const router = require('@koa/router')()

const controllers = require('./controllers')
const middlewares = require('../utils/middlewares')

router.use(middlewares.auth.required)

router.get('/todo', controllers.getToDoReviews)
router.patch('/:reviewId', controllers.addReviewContent)

module.exports = router
