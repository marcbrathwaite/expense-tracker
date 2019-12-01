import { promisify } from 'util'
import jwt from 'jsonwebtoken'

// FIXME: Put in config file
const JWT_SECRET = 'my-ultra-badass-and-secure-secret-for-jwt'
const JWT_EXPIRES_IN = '5m'

class TokenHandler {
  static signToken(id) {
    return jwt.sign({ id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN
    })
  }

  static async verifyToken(token) {
    return promisify(jwt.verify)(token, JWT_SECRET)
  }
}

export default TokenHandler
