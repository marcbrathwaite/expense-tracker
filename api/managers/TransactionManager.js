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
}
