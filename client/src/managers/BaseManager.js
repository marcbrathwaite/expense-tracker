// errors
import { SignInError, ManagerError, SignUpError } from './errors'

export class BaseManager {
  static _parseError(error) {
    const err = new ManagerError(`User Manager Error: ${error.message}`)

    if (error.name === 'UnauthorizedError') {
      return new SignInError(`No user info returned: ${error.message}`)
    }

    if (error.name === 'ConflictError') {
      return new SignUpError(`User already exists: ${error.message}`)
    }

    return err
  }
}
