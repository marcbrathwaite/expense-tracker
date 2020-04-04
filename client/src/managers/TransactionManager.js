// Services
import { ExpenseAPIService } from '../services'

// Manager
import { BaseManager } from './BaseManager'

export class TransactionManager extends BaseManager {
  constructor() {
    super()
    this._apiService = new ExpenseAPIService()
  }

  static get sharedInstance() {
    if (this._instance === undefined) {
      this._instance = new TransactionManager()
    }

    return this._instance
  }

  // method to get transactions for a particular user
  /**
   * 
   * @param {*} params 
   */
  async getTransactions(params) {
    try {
      const { page, limit } = params
      const transactions = await this._apiService.getTransactions({ page, limit })
      return transactions
    } catch (e) {
      throw TransactionManager._parseError(e)
    }
  }

  async addTransaction(transaction) {
    try {
      const res = await this._apiService.addTransaction(transaction)
      return res
    } catch (e) {
      throw TransactionManager._parseError(e)
    }
  }

  async deleteTransaction(transactionId) {
    try {
      await this._apiService.deleteTransaction(transactionId)
    } catch (e) {
      throw TransactionManager._parseError(e)
    }
  }

  async updateTransaction(transactionId, transaction) {
    try {
      const res = await this._apiService.updateTransaction(transactionId, transaction)
      return res
    } catch (e) {
      throw TransactionManager._parseError(e)
    }
  }
}
