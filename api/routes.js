import express from 'express'
import authRouter from './routers/authRouter'
import userRouter from './routers/userRouter'
import transactionRouter from './routers/transactionRouter'

const router = express.Router()
// Authentication rotuer
router.use('/auth', authRouter)
// Users router
router.use('/users', userRouter)
// Transaction router
router.use('/transactions', transactionRouter)

export default router
