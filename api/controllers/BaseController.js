const { JWT_COOKIE_EXPIRES_IN } = require('../config/keys')

exports.BaseController = class BaseController {
  static createSendToken(user, token, statusCode, res) {
    const cookieOptions = {
      expires: new Date(
        Date.now() + JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true // cookie cannot be modified by the browser
    }
    if (process.env.NODE_ENV === 'production') {
      // In production, only send cookie on encrypted connection
      cookieOptions.secure = true
    }

    // Creating cookie to send to client
    res.cookie('jwt', token, cookieOptions)

    res.status(statusCode).json({
      statusCd: statusCode,
      status: 'success',
      token,
      data: { user }
    })
  }
}
