//Errors
const { AppError } = require('../errors')

exports.BaseManager = class BaseManager {
  constructor() {}
  static parseError(err, entity) {
    const error = new AppError('Internal Server Error', 500)
    if (err.name === 'MongoError' && err.code === 11000) {
      return new AppError(`${entity} already exists`, 409)
    }
    if (err.name === 'CastError') {
      return new AppError(`${entity} not found`, 404)
    }
    if (err.name === 'AppError') {
      return err
    }
    return error
  }
}
