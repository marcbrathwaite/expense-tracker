// Services
import { ExpenseAPIService } from '../services'

// Manager
import { BaseManager } from './BaseManager'
// errors
// import { SignInError, ManagerError, SignUpError } from './errors'

export class UserManager extends BaseManager {
  constructor() {
    super()
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
      throw UserManager._parseError(e)
    }
  }

  // method for login flow
  async signIn(email, password) {
    try {
      const user = await this._apiService.signIn(email, password)
      return user
    } catch (e) {
      throw UserManager._parseError(e)
    }
  }

  // method for logout flow
  async signOut() {
    try {
      await this._apiService.signOut()
    } catch (e) {
      throw UserManager._parseError(e)
    }
  }

  // method for signup flow
  async signUp({ name, email, password, passwordConfirm }) {
    try {
      const userInfo = {
        name,
        email,
        password,
        passwordConfirm
      }
      const user = await this._apiService.signUp(userInfo)
      return user
    } catch (e) {
      throw UserManager._parseError(e)
    }
  }

  // FIXME: Add this to a base manager
  // _parseError(error) {
  //   const err = new ManagerError(`User Manager Error: ${error.message}`)

  //   if (error.name === 'UnauthorizedError') {
  //     return new SignInError(`No user info returned: ${error.message}`)
  //   }

  //   if (error.name === 'ConflictError') {
  //     return new SignUpError(`User already exists: ${error.message}`)
  //   }

  //   return err
  // }
}
