import express from 'express'
import authRouter from './routers/authRouter'
import userRouter from './routers/userRouter'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/users', userRouter)

export default router
