import express from 'express'

import { requireAuth } from '../middleware'

import { AuthController } from '../controllers'

const authRouter = express.Router()

authRouter.post('/signup', AuthController.signUp)
authRouter.post('/login', AuthController.login)
authRouter.post('/logout', requireAuth, AuthController.logout)
authRouter.post('/forgot_password', AuthController.forgotPassword)
authRouter.patch('/reset_password/:token', AuthController.resetPassword)

export default authRouter
