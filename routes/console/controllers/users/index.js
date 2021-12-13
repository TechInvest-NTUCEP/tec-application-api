const router = require('@koa/router')()

router.get('/', require('./list'))
// router.post('/', require('./addUser'))
router.patch('/:userId', require('./patchUserById'))

module.exports = router
