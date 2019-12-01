import express from 'express'

import { AuthController } from '../controllers'

const authRouter = express.Router()

authRouter.post('/signup', AuthController.signUp)
authRouter.post('/login', AuthController.login)

export default authRouter
