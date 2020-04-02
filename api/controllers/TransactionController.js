// Managers
const { TransactionManager } = require('../managers')
// Errors
const { AppError } = require('../errors')

// Utils
const logger = require('../utils/logger')
const { filterObj, isUndefined } = require('../utils')

exports.TransactionController = class TransactionController {
  static async addTransaction(req, res, next) {
    try {
      const { user } = req
      if (isUndefined(user)) {
        // TODO: logger
        return next(new AppError('User not found', 404))
      }

      // get userId
      const { id } = user

      // get params out of req body
      const { date, type, amount, description } = req.body

      if (isUndefined(date) || isUndefined(type) || isUndefined(amount)) {
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
        data: { transaction: newTransaction }
      })
    } catch (e) {
      logger.error(
        `[TransactionController - addTransaction] Add Transaction failure: ${e.message}`
      )
      next(e)
    }
  }

  static async updateTransaction(req, res, next) {
    try {
      const { user } = req
      if (isUndefined(user)) {
        // TODO: logger
        return next(new AppError('User not found', 404))
      }

      // get userId
      const { id: userId } = user
      // Get transaction id
      const { transactionId } = req.params

      // filter off unneccesary fields
      const filteredBody = filterObj(
        req.body,
        'date',
        'type',
        'amount',
        'description'
      )

      // call Manager function to update transaction
      const updatedTransaction = await TransactionManager.shareInstance.updateTransaction(
        transactionId,
        userId,
        filteredBody
      )
      res.status(200).json({
        statusCd: 200,
        status: 'success',
        data: {
          transaction: updatedTransaction
        }
      })
    } catch (e) {
      logger.error(
        `[TransactionController - updateTransaction] Update Transaction failure: ${e.message}`
      )
      next(e)
    }
  }

  static async getTransaction(req, res, next) {
    try {
      const { user } = req
      if (isUndefined(user)) {
        // TODO: logger
        return next(new AppError('User not found', 404))
      }

      // get userId
      const { id: userId } = user
      // Get transaction id
      const { transactionId } = req.params

      const transaction = await TransactionManager.shareInstance.getTransaction(
        transactionId,
        userId
      )

      res.status(200).json({
        statusCd: 200,
        status: 'success',
        data: {
          transaction
        }
      })
    } catch (e) {
      logger.error(
        `[TransactionController - getTransaction] Get Transaction failure: ${e.message}`
      )
      next(e)
    }
  }

  static async deleteTransaction(req, res, next) {
    try {
      const { user } = req
      if (isUndefined(user)) {
        // TODO: logger
        return next(new AppError('User not found', 404))
      }

      // get userId
      const { id: userId } = user
      // Get transaction id
      const { transactionId } = req.params

      await TransactionManager.shareInstance.deleteTransaction(
        transactionId,
        userId
      )

      res.status(200).json({
        statusCd: 200,
        status: 'success'
      })
    } catch (e) {
      logger.error(
        `[TransactionController - deleteTransaction] Delete Transaction failure: ${e.message}`
      )
      next(e)
    }
  }

  static async getTransactions(req, res, next) {
    try {
      const { user } = req
      if (isUndefined(user)) {
        // TODO: logger
        return next(new AppError('User not found', 404))
      }

      // get userId
      const { id } = user

      // Get Type , Skip and limit query params
      const filteredQuery = filterObj(
        req.query,
        'type',
        'page',
        'limit',
        'sort'
      )

      const {
        searchCount,
        next: nxt,
        transactions,
        pageCount
      } = await TransactionManager.shareInstance.getTransactions(
        id,
        filteredQuery
      )

      res.status(200).json({
        statusCd: 200,
        status: 'success',
        data: {
          meta: {
            searchCount,
            next: nxt,
            pageCount
          },
          transactions
        }
      })
    } catch (e) {
      logger.error(
        `[TransactionController - getTransactions] Get Transactions failure: ${e.message}`
      )
      next(e)
    }
  }

  static async getSummary(req, res, next) {
    try {
      const summary = await TransactionManager.shareInstance.getSummary()

      res.status(200).json({
        statusCd: 200,
        status: 'success',
        summary
      })
    } catch (e) {
      logger.error(
        `[TransactionController - getSummary] Get Summary failure: ${e.message}`
      )
      next(e)
    }
  }
}
