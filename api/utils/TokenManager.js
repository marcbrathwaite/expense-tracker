const crypto = require('crypto')
const { promisify } = require('util')
const jwt = require('jsonwebtoken')

const { JWT_SECRET, JWT_EXPIRES_IN } = require('../config/keys')

class TokenManager {
  static signJWTToken(id) {
    return jwt.sign({ id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN
    })
  }

  static async verifyJWTToken(token) {
    return promisify(jwt.verify)(token, JWT_SECRET)
  }

  static createPasswordResetToken() {
    return crypto.randomBytes(32).toString('hex')
  }

  static hashPasswordResetToken(token) {
    return crypto
      .createHash('sha256')
      .update(token)
      .digest('hex')
  }
}

module.exports = TokenManager
