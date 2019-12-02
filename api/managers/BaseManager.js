//Errors
import { AppError } from '../errors'

export class BaseManager {
  constructor() {}
  static parseError(err, entity) {
    let error = new AppError('Internal Server Error', 500)
    if (err.name === 'MongoError' && err.code === 11000) {
      error = new AppError(`${entity} already exists`, 409)
    } else if (err.name === 'AppError') {
      error = err
    }
    return error
  }
}
