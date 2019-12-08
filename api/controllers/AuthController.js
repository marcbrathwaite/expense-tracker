// Managers
import { UserManager } from '../managers'

// Controllers
import { BaseController } from './BaseController'

// Errors
import { AppError } from '../errors'

// Utils
import logger from '../utils/logger'
import { isUndefined } from '../utils'

export class AuthController extends BaseController {
  static async signUp(req, res, next) {
    try {
      const { name, email, password, passwordConfirm } = req.body

      if (
        isUndefined(name) ||
        isUndefined(email) ||
        isUndefined(password) ||
        isUndefined(passwordConfirm)
      ) {
        logger.error(
          '[AuthController - signUp] Missing either name, email, password or passwordConfirm in request body'
        )
        return next(
          new AppError(
            'Invalid Arguments - Missing either name, email, password or passwordConfirm in request body',
            400
          )
        )
      }

      const { token, user } = await UserManager.shareInstance.signUp({
        name,
        email,
        password,
        passwordConfirm
      })

      logger.info(`[AuthController - signUp] SignUp success`)
      AuthController.createSendToken(user, token, 201, res)
    } catch (e) {
      logger.error(
        `[AuthController - signUp] SignUp request failed: ${e.message}`
      )
      next(e)
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body

      // Check if email and password exist
      if (isUndefined(email) || isUndefined(password)) {
        logger.error(
          '[AuthController - login] Missing email or password in request body'
        )
        return next(
          new AppError(
            'Invalid Arguments - Missing email or password in request body',
            400
          )
        )
      }

      const { token, user } = await UserManager.shareInstance.login({
        email,
        password
      })

      AuthController.createSendToken(user, token, 200, res)
    } catch (e) {
      logger.error(`[AuthController - Login] Login failed: ${e.message}`)
      next(e)
    }
  }

  static logout(req, res) {
    // send back a cookie with the same name and invalid jwt
    // set expiry time to short time
    res.cookie('jwt', 'loggedOut', {
      expires: new Date(Date.now() + 5 * 1000), // 5 seconds
      httpOnly: true
    })
    res.status(200).json({ status: 'success' })
  }

  static async forgotPassword(req, res, next) {
    try {
      const { email } = req.body
      const { protocol } = req
      const host = req.get('host')
      // Check if email and password exist
      if (isUndefined(email)) {
        logger.error(
          '[AuthController - forgotPassword] Missing email in request body'
        )
        return next(
          new AppError('Invalid Arguments - Missing email in request body', 400)
        )
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
      next(e)
    }
  }

  static async resetPassword(req, res, next) {
    try {
      // get token from the params
      const { token } = req.params
      const { password, passwordConfirm } = req.body

      if (isUndefined(password) || isUndefined(passwordConfirm)) {
        logger.error(
          '[AuthController - resetPassword] Missing password or passwordConfirm in request body'
        )

        return next(
          new AppError(
            'Invalid Arguments - Missing password or passwordConfirm in request body',
            400
          )
        )
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
    } catch (e) {
      logger.error(
        `[AuthController - resetPassword] reset password function failed: ${e.message}`
      )
      next(e)
    }
  }
}
