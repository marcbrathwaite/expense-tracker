import { UserManager } from '../managers'

import logger from '../utils/logger'

export class AuthController {
  static async signUp(req, res, next) {
    try {
      // TODO: Validation for these params
      const { name, email, password, passwordConfirm } = req.body

      if (!name || !email || !password || !passwordConfirm) {
        logger.error(
          '[AuthController - signUp] Missing parameter [name, email, password, passwordConfirm] in request body'
        )

        res.status(400).json({
          statusCd: 400,
          status: 'failure',
          message: 'Invalid arguments'
        })
      }

      const { token, user } = await UserManager.shareInstance.signUp({
        name,
        email,
        password,
        passwordConfirm
      })

      logger.info(`[AuthController - signUp] SignUp success`)
      res.status(201).json({
        statusCd: 201,
        status: 'success',
        token,
        data: { user }
      })
    } catch (e) {
      logger.error(
        `[AuthController - signUp] SignUp request failed: ${e.message}`
      )
      res.status(500).json({
        statusCd: 500,
        status: 'failure',
        message: 'SignUp failure'
      })
    }
  }

  static async login(req, res, next) {
    try {
      // TODO: Check that these params are on req.body
      const { email, password } = req.body

      // Check if email and password exist
      if (!email || !password) {
        logger.error(
          '[AuthController - login] Missing email or password from request body'
        )
        // FIXME: possibly throw an error and handle downstream
        res.status(400).json({
          statusCd: 400,
          status: 'failure',
          message: 'Invalid Arguments'
        })
      }

      const { token, user } = await UserManager.shareInstance.login({
        email,
        password
      })

      res.status(200).json({
        statusCd: 200,
        status: 'success',
        token,
        data: { user }
      })
    } catch (e) {
      logger.error(`[AuthController - Login] Login failed: ${e.message}`)
      res.status(401).json({
        statusCd: 401,
        status: 'failure',
        message: 'Unauthorized access'
      })
    }
  }
}
