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
const sortParams = [
  'date-desc',
  'date-asc',
  'type-desc',
  'type-asc',
  'amount-desc',
  'amount-asc'
]

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
          new: true,
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
    { type, skip = 0, limit = 0, sort = 'date-desc' }
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

      // Skip and limit must be numbers
      if (isNaN(toNumber(skip)) || isNaN(toNumber(limit))) {
        throw new AppError(
          'Invalid argument: skip and limit must be numbers',
          400
        )
      }

      // Check the sort value
      if (!sortParams.includes(sort)) {
        throw new AppError(
          'Invalid argument: sort must be one of date-desc, date-asc, type-desc, type-asc, amount-desc and amount-asc',
          400
        )
      }

      // get sort info
      const [field, sortType] = sort.split('-')

      const skipInt = toInteger(toNumber(skip))
      const limitInt = toInteger(toNumber(limit))

      const typeSearch = {}
      if (type) {
        typeSearch.type = type
      }

      const transactions = await this._transaction
        .find({
          _user: userId,
          ...typeSearch
        })
        .sort({ [field]: sortType })
        .skip(toNumber(skipInt))
        .limit(toNumber(limitInt))

      const serializedTransactions = transactions.map(transaction =>
        transaction.serialize()
      )

      const documentCount = await this._transaction.countDocuments({
        _user: userId,
        ...typeSearch
      })

      let next

      // This represents where the next get request should start
      const slidingWindowEnd = skipInt + limitInt

      if (slidingWindowEnd < documentCount && slidingWindowEnd !== 0) {
        next = slidingWindowEnd
      }

      return {
        typeCount: documentCount,
        next,
        transactions: serializedTransactions,
        resultCount: serializedTransactions.length
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
