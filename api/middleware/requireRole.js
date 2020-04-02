// Errors
const { AppError } = require('../errors')

exports.requireRole = (...roles) => {
  return (req, res, next) => {
    // check whether the current user role is within roles
    if (!roles.includes(req.user.role)) {
      return next(new AppError('Unauthorized to use this route', 403))
    }
    next()
  }
}
