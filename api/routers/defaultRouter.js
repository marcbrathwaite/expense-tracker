import express from 'express'
import { AppError } from '../errors'

const defaultRouter = express.Router()

defaultRouter.all('*', function(req, res, next) {
  next(
    new AppError(`Route ${req.originalUrl} does not exist on this server!`, 404)
  )
})

export default defaultRouter
