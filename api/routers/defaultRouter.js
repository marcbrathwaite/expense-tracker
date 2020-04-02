const express = require('express')
const { AppError } = require('../errors')

const defaultRouter = express.Router()

defaultRouter.all('*', function(req, res, next) {
  next(
    new AppError(
      `The ${req.method} method on the ${req.originalUrl} route does not exist on this server!`,
      404
    )
  )
})

module.exports = defaultRouter
