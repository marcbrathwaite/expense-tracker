export function requireRole(...roles) {
  return function(req, res, next) {
    // check whether the current user role is within roles
    if (!roles.includes(req.user.role)) {
      // FIXME: Error handling
      res.status(403).json({
        statusCd: 403,
        status: 'failure',
        message: 'Unauthorized to use this route'
      })
      return
    }
    next()
  }
}
