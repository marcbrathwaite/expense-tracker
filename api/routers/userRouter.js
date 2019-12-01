import express from 'express'

import { UserController } from '../controllers'

import { requireAuth, requireRole } from '../middleware'

const userRouter = express.Router()

// require user to be autheticated for these routes
userRouter.use(requireAuth)

userRouter.get('/', requireRole('admin'), UserController.getUsers)
userRouter.get('/current_user', UserController.getCurrentUser)

export default userRouter
