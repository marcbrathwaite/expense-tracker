const express = require('express')

const { requireAuth } = require('../middleware')

const { AuthController } = require('../controllers')

const authRouter = express.Router()

authRouter.post('/signup', AuthController.signUp)
authRouter.post('/login', AuthController.login)
authRouter.post('/logout', requireAuth, AuthController.logout)
authRouter.post('/forgot_password', AuthController.forgotPassword)
authRouter.patch('/reset_password/:token', AuthController.resetPassword)

module.exports = authRouter
