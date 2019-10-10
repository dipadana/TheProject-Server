const router = require('express').Router()
const userController = require('../controllers/user')

router.post('/login', fileController.login)
router.post('/register', fileController.register)

module.exports = router