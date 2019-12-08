import axios from 'axios'
// import cookie from 'react-cookies'

// Errors
import { UnauthorizedError, ServiceError } from './errors'

export class ExpenseAPIService {
  async getUser() {
    try {
      const res = await axios.get('/api/v1/users/current_user')
      return res.data
    } catch (e) {
      throw this._parseHttpResponse(e.response)
    }
  }

  async signIn(email, password) {
    try {
      const res = await axios.post('/api/v1/auth/login', {
        email,
        password
      })
      return res.data
    } catch (e) {
      throw this._parseHttpResponse(e.response)
    }
  }

  _parseHttpResponse(response) {
    const error = new ServiceError('Service unavailable')
    // Unauthorized Access
    if (response.status === 401) {
      return new UnauthorizedError(response.data.message)
    }
    return error
  }
}
