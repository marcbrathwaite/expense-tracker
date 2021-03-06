const express = require('express')

const { UserController } = require('../controllers')

const { requireAuth, requireRole } = require('../middleware')

const userRouter = express.Router()

// require user to be autheticated for these routes
userRouter.use(requireAuth)

userRouter.get('/', requireRole('admin'), UserController.getUsers)
// Get current user
userRouter.get('/current_user', UserController.getCurrentUser)
// update password
userRouter.patch('/current_user/password', UserController.updatePassword)
// update user info
userRouter.patch('/current_user', UserController.updateUserInfo)
// delete current user
userRouter.delete('/current_user', UserController.deleteCurrentUser)

module.exports = userRouter
