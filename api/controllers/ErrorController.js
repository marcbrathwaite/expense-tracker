export class ErrorController {
  static handleError(err, req, res, next) {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'
    res.status(err.statusCode).json({
      statusCd: err.statusCode,
      status: err.status,
      message: err.message
    })
  }
}
