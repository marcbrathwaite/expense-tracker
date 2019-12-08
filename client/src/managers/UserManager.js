import { ExpenseAPIService } from '../services'
import { SignInError, ManagerError } from './errors'

export class UserManager {
  constructor() {
    this._apiService = new ExpenseAPIService()
  }

  static get sharedInstance() {
    if (this._instance === undefined) {
      this._instance = new UserManager()
    }

    return this._instance
  }

  // method to get user info of current user
  async getUser() {
    try {
      const user = await this._apiService.getUser()
      return user
    } catch (e) {
      throw this._parseError(e)
    }
  }

  // method for login flow
  async signIn(email, password) {
    try {
      const user = await this._apiService.signIn(email, password)
      return user
    } catch (e) {
      throw this._parseError(e)
    }
  }

  // method for logout flow
  async signOut() {
    try {
      await this._apiService.signOut()
    } catch (e) {
      throw this._parseError(e)
    }
  }

  // method for signup flow
  async signUp() {}

  _parseError(error) {
    const err = new ManagerError(`User Manager Error: ${error.message}`)

    if (error.name === 'UnauthorizedError') {
      // TODO: Rename Error?
      return new SignInError(`No user info returned: ${error.message}`)
    }
    return err
  }
}
