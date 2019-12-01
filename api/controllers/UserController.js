import { UserManager } from '../managers'

import { BaseController } from './BaseController'

import logger from '../utils/logger'
import { filterObj } from '../utils'

export class UserController extends BaseController {
  static async getCurrentUser(req, res, next) {
    try {
      const { user } = req
      if (!user) {
        throw new Error('User not found')
      }
      res.status(200).json({
        statusCd: 200,
        status: 'success',
        data: { user }
      })
    } catch (e) {
      // FIXME: Global error
      logger.error(
        `[UserController - getCurrentUser] User not found: ${e.message}`
      )
      res.status(404).json({
        statusCd: 400,
        status: 'failure',
        message: `User not found: ${e.message}`
      })
    }
  }

  static async getUsers(req, res, next) {
    try {
      const users = await UserManager.shareInstance.getUsers()
      res.status(200).json({
        statusCd: 200,
        status: 'success',
        data: {
          users
        }
      })
    } catch (e) {
      res.status(500).json({
        statusCd: 500,
        status: 'failure',
        message: `System: ${e.message}`
      })
    }
  }

  static async updatePassword(req, res, next) {
    try {
      // Get password from body
      const { password, newPassword, newPasswordConfirm } = req.body
      const { user } = req
      if (!user) {
        throw new Error('User not found')
      }

      // get userId
      const { id } = user

      if (!password || !newPassword || !newPasswordConfirm) {
        throw new Error(
          'Invalid arguments missing either password, newPassword or newPasswordConfirm'
        )
      }

      const {
        token,
        user: userModel
      } = await UserManager.shareInstance.updatePassword(
        id,
        password,
        newPassword,
        newPasswordConfirm
      )
      UserController.createSendToken(userModel, token, 200, res)
      // res.status(200).json({
      //   statusCd: 200,
      //   status: 'success',
      //   token,
      //   data: { user: userModel }
      // })
    } catch (e) {
      res.status(500).json({
        statusCd: 500,
        status: 'failure',
        message: `System: ${e.message}`
      })
    }
  }

  static async updateUserInfo(req, res, next) {
    try {
      // Create error in password is send in request
      if (req.body.password || req.body.passwordConfirm) {
        throw new Error('This is route is not for password updates - 400')
      }

      const { user } = req
      if (!user) {
        throw new Error('User not found')
      }

      // get userId
      const { id } = user

      // filter out unwanted field names that are not allowed to be updated
      const filteredBody = filterObj(req.body, 'name', 'email')

      const updatedUser = await UserManager.shareInstance.updateUserInfo(
        id,
        filteredBody
      )

      res.status(200).json({
        statusCd: 200,
        status: 'success',
        data: {
          user: updatedUser
        }
      })
    } catch (e) {
      res.status(500).json({
        statusCd: 500,
        status: 'failure',
        message: `System: ${e.message}`
      })
    }
  }

  static async deleteCurrentUser(req, res, next) {
    try {
      const { user } = req
      if (!user) {
        throw new Error('User not found')
      }

      // get userId
      const { id } = user

      await UserManager.shareInstance.deactivateUser(id)
      res.status(204).json({
        statusCd: 204,
        status: 'success',
        data: null
      })
    } catch (e) {
      res.status(500).json({
        statusCd: 500,
        status: 'failure',
        message: `System: ${e.message}`
      })
    }
  }
}
