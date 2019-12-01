import TokenHandler from '../utils/TokenHandler'
import logger from '../utils/logger'

import { UserManager } from '../managers'

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
    }
    if (!token) {
      logger.error(
        '[Middleware - requireAuth] - No Token in the request header'
      )
      // FIXME: Global error handling
      throw new Error('No Token in the request header')
    }
    // verify token
    const decoded = await TokenHandler.verifyToken(token)
    // Check if user  still exists
    const currentUser = await UserManager.shareInstance.getUser(decoded.id)
    if (!currentUser) {
      logger.error('[Middleware - requireAuth] - User no longer exists')
      // FIXME: Global error handling
      throw new Error('User no longer exists')
    }

    // Check if user changed password the token was issued
    if (currentUser.changePasswordAfter(decoded.iat)) {
      logger.error(
        '[Middleware - requireAuth] - User recently changed password'
      )
      // FIXME: Global error handling
      throw new Error('User recently changed password. Please log in again')
    }

    // grant access to protected route and put user on req object
    req.user = currentUser.serialize()
    next()
  } catch (e) {
    // FIXME: GLOBAL Errors
    logger.error(
      '[Middleware - requireAuth] - Token Error - Incorrect or Expires'
    )
    return res.status(401).json({
      statusCd: 401,
      status: 'failure',
      message: `Unauthorized Access: ${e.message}`
    })
  }
}
