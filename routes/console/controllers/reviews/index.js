const router = require('@koa/router')()

router.get('/', require('./getReviews'))
router.post('/request', require('./addReviewRequest'))

module.exports = router
