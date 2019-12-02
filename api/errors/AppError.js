export class AppError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.name = 'AppError'
    this.statusCode = statusCode
    this.status = `${statusCode}`.startsWith('4') ? 'failure' : 'error'
    this.isOperational = true

    // all stack trace functionality
    Error.captureStackTrace(this, this.constructor)
  }
}
