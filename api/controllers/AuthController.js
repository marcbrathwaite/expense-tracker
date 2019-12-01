import { UserManager } from '../managers'
import { BaseController } from './BaseController'

import logger from '../utils/logger'

export class AuthController extends BaseController {
  static async signUp(req, res, next) {
    try {
      const { name, email, password, passwordConfirm } = req.body

      if (!name || !email || !password || !passwordConfirm) {
        logger.error(
          '[AuthController - signUp] Missing parameter [name, email, password, passwordConfirm] in request body'
        )

        return res.status(400).json({
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
      AuthController.createSendToken(user, token, 201, res)
      // res.status(201).json({
      //   statusCd: 201,
      //   status: 'success',
      //   token,
      //   data: { user }
      // })
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
      const { email, password } = req.body

      // Check if email and password exist
      if (!email || !password) {
        logger.error(
          '[AuthController - login] Missing email or password from request body'
        )
        // FIXME: possibly throw an error and handle downstream
        return res.status(400).json({
          statusCd: 400,
          status: 'failure',
          message: 'Invalid Arguments'
        })
      }

      const { token, user } = await UserManager.shareInstance.login({
        email,
        password
      })

      AuthController.createSendToken(user, token, 200, res)

      // res.status(200).json({
      //   statusCd: 200,
      //   status: 'success',
      //   token,
      //   data: { user }
      // })
    } catch (e) {
      logger.error(`[AuthController - Login] Login failed: ${e.message}`)
      res.status(401).json({
        statusCd: 401,
        status: 'failure',
        message: 'Unauthorized access'
      })
    }
  }

  static async forgotPassword(req, res, next) {
    try {
      const { email } = req.body
      const { protocol } = req
      const host = req.get('host')
      // Check if email and password exist
      if (!email) {
        logger.error(
          '[AuthController - forgotPassword] Missing email from request body'
        )
        // FIXME: possibly throw an error and handle downstream
        return res.status(400).json({
          statusCd: 400,
          status: 'failure',
          message: 'Invalid Arguments'
        })
      }

      await UserManager.shareInstance.forgotPassword(email, { host, protocol })
      res.status(200).json({
        statusCd: 200,
        status: 'success',
        message: 'Token sent to email'
      })
    } catch (e) {
      logger.error(
        `[AuthController - forgotPassword] Forgot Password function failed: ${e.message}`
      )
      res.status(500).json({
        statusCd: 500,
        status: 'failure',
        message: 'Forgot Password failed'
      })
    }
  }

  static async resetPassword(req, res, next) {
    try {
      // get token from the params
      const { token } = req.params
      const { password, passwordConfirm } = req.body

      if (!password || !passwordConfirm) {
        logger.error(
          '[AuthController - resetPassword] Missing parameter [password, passwordConfirm] in request body'
        )

        return res.status(400).json({
          statusCd: 400,
          status: 'failure',
          message: 'Invalid arguments'
        })
      }

      const {
        token: jwtToken,
        user
      } = await UserManager.shareInstance.resetPassword(
        token,
        password,
        passwordConfirm
      )

      AuthController.createSendToken(user, jwtToken, 200, res)

      // res.status(200).json({
      //   statusCd: 200,
      //   status: 'success',
      //   token: jwtToken,
      //   data: { user }
      // })
    } catch (e) {
      logger.error(
        `[AuthController - resetPassword] reset password function failed: ${e.message}`
      )
      res.status(500).json({
        statusCd: 500,
        status: 'failure',
        message: 'Reset Password failed'
      })
    }
  }
}
