import TokenManager from '../utils/TokenManager'
import logger from '../utils/logger'

// Managers
import { UserManager } from '../managers'
// Errors
import { AppError } from '../errors'

export async function requireAuth(req, res, next) {
  try {
    let token
    // Getting token and check if it is there
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      // Get token - format 'Bearer Token'
      token = req.headers.authorization.split(' ')[1]
      logger.info('[Middleware - requireAuth] - Get Token from req Header')
    } else if (req.cookies.jwt) {
      // if there is no authorization header, look for token in cookies
      token = req.cookies.jwt
    }
    if (!token) {
      logger.error(
        '[Middleware - requireAuth] - No Token in the request header'
      )
      throw new AppError('No Token in the request header', 401)
    }
    // verify token
    const decoded = await TokenManager.verifyJWTToken(token)
    // Check if user  still exists
    const currentUser = await UserManager.shareInstance.getUser(decoded.id)
    if (!currentUser) {
      logger.error('[Middleware - requireAuth] - User no longer exists')

      throw new AppError('User no longer exists', 401)
    }

    // Check if user changed password the token was issued
    if (currentUser.changePasswordAfter(decoded.iat)) {
      logger.error(
        '[Middleware - requireAuth] - User recently changed password'
      )
      throw new AppError(
        'User recently changed password. Please log in again',
        401
      )
    }

    // grant access to protected route and put user on req object
    req.user = currentUser.serialize()
    next()
  } catch (e) {
    // FIXME: GLOBAL Errors
    logger.error(
      '[Middleware - requireAuth] - Token Error - Incorrect or Expires'
    )
    next(e)
  }
}
