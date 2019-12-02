// Managers
import { TransactionManager } from '../managers'
// Errors
import { AppError } from '../errors'

// Utils
import logger from '../utils/logger'

export class TransactionController {
  static async addTransaction(req, res, next) {
    try {
      const { user } = req
      if (!user) {
        // TODO: logger
        return next(new AppError('User not found', 404))
      }

      // get userId
      const { id } = user

      // get params out of req body
      const { date, type, amount, description } = req.body

      if (!date || !type || !amount) {
        // TODO: logger
        return next(
          new AppError(
            'Missing either date, type, or amount in request body',
            400
          )
        )
      }

      const transaction = {
        date,
        type,
        amount,
        _user: id
      }

      if (description) {
        transaction.description = description
      }

      const newTransaction = await TransactionManager.shareInstance.addTransaction(
        transaction
      )

      res.status(201).json({
        statusCd: 201,
        status: 'success',
        data: { newTransaction }
      })
    } catch (e) {
      logger.error(
        `[TransactionController - addTransaction] Add Transaction failure: ${e.message}`
      )
      next(e)
    }
  }
}
