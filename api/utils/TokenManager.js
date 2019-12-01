import crypto from 'crypto'
import { promisify } from 'util'
import jwt from 'jsonwebtoken'

import { JWT_SECRET, JWT_EXPIRES_IN } from '../config/keys'

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

export default TokenManager
