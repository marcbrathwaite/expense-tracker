import toNumber from 'lodash.tonumber'
import toInteger from 'lodash.tointeger'
// Model
import { Transaction } from '../models'
// Managers
import { BaseManager } from './BaseManager'
// Errors
import { AppError } from '../errors'
// Utils
import logger from '../utils/logger'

// FIXME: move to validation file
const sortParams = ['date', 'type', 'amount', '-date', '-type', '-amount']

export class TransactionManager extends BaseManager {
  constructor() {
    super()
    const instance = this.constructor.instance
    if (instance) {
      return instance
    }
    this.constructor.instance = this

    // Assign User model
    this._transaction = Transaction
  }

  // shared instance of UserManager
  static get shareInstance() {
    if (this._sharedInstance === undefined) {
      this._sharedInstance = new TransactionManager()
    }
    return this._sharedInstance
  }

  async addTransaction(transaction) {
    try {
      const newTransaction = await new this._transaction(transaction).save()

      return newTransaction.serialize()
    } catch (e) {
      logger.error(
        `[TransactionManager - addTransaction] Error message: ${e.message}`
      )
      throw TransactionManager.parseError(e, 'Transaction')
    }
  }

  async updateTransaction(transactionId, userId, transactionInfo) {
    try {
      const updatedTransaction = await this._transaction.findOneAndUpdate(
        {
          _id: transactionId,
          _user: userId
        },
        transactionInfo,
        {
          new: true, // new updated document will be returned
          runValidators: true
        }
      )
      if (!updatedTransaction) {
        logger.error(
          '[TransactionManager - updateTransaction] Transaction not found'
        )
        throw new AppError('Transaction not found', 404)
      }
      return updatedTransaction.serialize()
    } catch (e) {
      logger.error(
        `[TransactionManager - updateTransaction] Update Transaction error: ${e.message}`
      )
      throw TransactionManager.parseError(e, 'Transaction')
    }
  }

  async deleteTransaction(transactionId, userId) {
    try {
      const deletedTransaction = await this._transaction.findOneAndDelete({
        _id: transactionId,
        _user: userId
      })

      if (!deletedTransaction) {
        logger.error(
          '[TransactionManager - DeleteTransaction] Transaction not found'
        )
        throw new AppError('Transaction not found', 404)
      }
    } catch (e) {
      logger.error(
        `[TransactionManager - deleteTransaction] Delete Transaction error: ${e.message}`
      )
      throw TransactionManager.parseError(e, 'Transaction')
    }
  }

  async getTransaction(transactionId, userId) {
    try {
      const transaction = await this._transaction.findOne({
        _id: transactionId,
        _user: userId
      })
      if (!transaction) {
        logger.error(
          '[TransactionManager - getTransaction] Transaction not found'
        )
        throw new AppError('Transaction not found', 404)
      }
      return transaction.serialize()
    } catch (e) {
      logger.error(
        `[TransactionManager - getTransaction] Get Transaction error: ${e.message}`
      )
      throw TransactionManager.parseError(e, 'Transaction')
    }
  }

  // TODO: Add comments
  async getTransactions(
    userId,
    { type, page = 1, limit = 10, sort = '-date' }
  ) {
    try {
      // if there is a type, it must be either income or expense
      if (
        type &&
        type.toLowerCase() !== 'income' &&
        type.toLowerCase() !== 'expense'
      ) {
        throw new AppError(
          'Invalid argument: type must be either income or expense',
          400
        )
      }

      // Page and limit must be numbers
      if (isNaN(toNumber(page)) || isNaN(toNumber(limit))) {
        throw new AppError(
          'Invalid argument: page and limit must be numbers',
          400
        )
      }

      // Check the sort value
      if (!sortParams.includes(sort)) {
        throw new AppError(
          'Invalid argument: sort must be one of date [or -date], type [or -type] and amount [or -amount]',
          400
        )
      }
      const pageInt = toInteger(page)
      if (pageInt < 1) {
        throw new AppError('Invalid argument: page must be 1 or more', 400)
      }
      const limitInt = toInteger(limit)
      const skip = (pageInt - 1) * limit

      const typeSearch = {}
      if (type) {
        typeSearch.type = type
      }

      const transactions = await this._transaction
        .find({
          _user: userId,
          ...typeSearch
        })
        .sort(sort)
        .skip(skip)
        .limit(limitInt)

      const serializedTransactions = transactions.map(transaction =>
        transaction.serialize()
      )

      const documentCount = await this._transaction.countDocuments({
        _user: userId,
        ...typeSearch
      })

      let next

      if (skip < documentCount) {
        next = skip + limit < documentCount ? pageInt + 1 : undefined
      }

      return {
        searchCount: documentCount,
        next,
        transactions: serializedTransactions,
        pageCount: serializedTransactions.length
      }
    } catch (e) {
      logger.error(
        `[TransactionManager - getTransactions] Get Transactions error: ${e.message}`
      )
      throw TransactionManager.parseError(e, 'Transaction')
    }
  }

  async getSummary() {
    try {
      const summary = await this._transaction.aggregate().group({
        _id: '$type',
        total: {
          $sum: '$amount'
        }
      })

      return this._formatSummary(summary)
    } catch (e) {
      logger.error(
        `[TransactionManager - getSummary] Get Summary error: ${e.message}`
      )
      throw TransactionManager.parseError(e, 'Transaction')
    }
  }

  _formatSummary(summary) {
    const formattedSummary = {
      expense: 0,
      income: 0
    }
    summary.forEach(item => {
      const { _id } = item
      if (formattedSummary[_id] !== undefined) {
        formattedSummary[_id] = item.total
      }
    })

    formattedSummary.net = formattedSummary.income - formattedSummary.expense
    return formattedSummary
  }
}
