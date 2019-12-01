import express from 'express'

import { AuthController } from '../controllers'

const authRouter = express.Router()

authRouter.post('/signup', AuthController.signUp)
authRouter.post('/login', AuthController.login)
authRouter.post('/forgot_password', AuthController.forgotPassword)
authRouter.patch('/reset_password/:token', AuthController.resetPassword)

export default authRouter
