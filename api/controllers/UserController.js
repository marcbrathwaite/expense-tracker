// Managers
const { UserManager } = require('../managers')

// Controller
const { BaseController } = require('./BaseController')

// Erros
const { AppError } = require('../errors')

const logger = require('../utils/logger')
const { filterObj, isUndefined } = require('../utils')

exports.UserController = class UserController extends BaseController {
  static async getCurrentUser(req, res, next) {
    const { user } = req
    if (isUndefined(user)) {
      logger.error('[UserController - getCurrentUser] User not found')

      return next(new AppError('User not found', 404))
    }
    res.status(200).json({
      statusCd: 200,
      status: 'success',
      data: { user }
    })
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
      logger.error(
        `[UserController - getUsers] Get Users failure: ${e.message}`
      )
      next(e)
    }
  }

  static async updatePassword(req, res, next) {
    try {
      // Get password from body
      const { password, newPassword, newPasswordConfirm } = req.body
      const { user } = req
      if (isUndefined(user)) {
        logger.error('[UserController - updatePassword] User not found')

        return next(new AppError('User not found', 404))
      }

      // get userId
      const { id } = user

      if (
        isUndefined(password) ||
        isUndefined(newPassword) ||
        isUndefined(newPasswordConfirm)
      ) {
        logger.error(
          `[UserController - updatePassword] Missing either name, email, password or passwordConfirm in request body`
        )

        return next(
          new AppError(
            'Missing either name, email, password or passwordConfirm in request body',
            400
          )
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
    } catch (e) {
      logger.error(
        `[UserController - updatePassword] Update Password failure: ${e.message}`
      )
      next(e)
    }
  }

  static async updateUserInfo(req, res, next) {
    try {
      // Create error if password is sent in request
      if (req.body.password || req.body.passwordConfirm) {
        // TODO: logger
        return next(
          new AppError('This is route is not for password updates', 400)
        )
      }

      const { user } = req
      if (isUndefined(user)) {
        return next(new AppError('User not found', 404))
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
      // TODO: logger
      next(e)
    }
  }

  static async deleteCurrentUser(req, res, next) {
    try {
      const { user } = req
      if (isUndefined(user)) {
        // TODO: logger
        return next(new AppError('User not found', 404))
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
      // TODO: logger
      next(e)
    }
  }
}
