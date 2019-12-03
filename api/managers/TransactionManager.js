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
  async getTransactions(userId, { type, skip = 0, limit = 2 }) {
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
        .sort({ date: 'desc' })
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

      if (skipInt + limitInt < documentCount) {
        next = skipInt + limitInt
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
}
