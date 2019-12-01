import logger from '../utils/logger'

import { UserManager } from '../managers'

export class UserController {
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
}
