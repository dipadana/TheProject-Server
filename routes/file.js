const router = require('express').Router()
const fileController = require('../controllers/file')
const auth = require('../middlewares/auth')

router.use(auth)
router.get('/find', fileController.findAll)
router.post('/create', fileController.create)

module.exports = router