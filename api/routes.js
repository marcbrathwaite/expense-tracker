import express from 'express'
import authRouter from './routers/authRouter'
import userRouter from './routers/userRouter'
import transactionRouter from './routers/transactionRouter'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/transactions', transactionRouter)

export default router
