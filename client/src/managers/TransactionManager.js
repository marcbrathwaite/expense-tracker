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
  async getTransactions() {
    try {
      const transactions = await this._apiService.getTransactions()
      return transactions
    } catch (e) {
      throw TransactionManager._parseError(e)
    }
  }
}
