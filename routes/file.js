const router = require('express').Router()
const fileController = require('../controllers/file')
const auth = require('../middlewares/auth')

router.get('/find', fileController.findAll)
router.post('/create', auth, fileController.create)

module.exports = router