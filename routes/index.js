const router = require('express').Router()
const userRouter = require('./user')
const fileRouter = require('./file')


router.use('/user', userRouter)
router.use('/file', fileRouter)

module.exports = router