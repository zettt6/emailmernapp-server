const Router = require('express')
const router = new Router()
const controller = require('./controller')

router.post('/login', controller.login)
router.post('/send', controller.sendMessage)

router.get('/received', controller.getReceivedMessages)

router.get('/sended', controller.getSendedMessages)

router.get('/search', controller.searchUser)

module.exports = router
