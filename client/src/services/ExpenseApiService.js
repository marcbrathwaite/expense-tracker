import axios from 'axios'
// import cookie from 'react-cookies'

// Errors
import { UnauthorizedError, ServiceError, ConflictError } from './errors'

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

  async signUp({ name, email, password, passwordConfirm }) {
    try {
      const res = await axios.post('/api/v1/auth/signup', {
        name,
        email,
        password,
        passwordConfirm
      })
      return res.data
    } catch (e) {
      throw this._parseHttpResponse(e.response)
    }
  }

  async signOut() {
    try {
      await axios.post('/api/v1/auth/logout')
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
    // Conflict status
    if (response.status === 409) {
      return new ConflictError(response.data.message)
    }
    return error
  }
}
