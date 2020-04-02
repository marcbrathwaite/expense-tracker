const express = require('express')
const authRouter = require('./routers/authRouter')
const userRouter = require('./routers/userRouter')
const transactionRouter = require('./routers/transactionRouter')

const router = express.Router()
// Authentication rotuer
router.use('/auth', authRouter)
// Users router
router.use('/users', userRouter)
// Transaction router
router.use('/transactions', transactionRouter)

module.exports = router
