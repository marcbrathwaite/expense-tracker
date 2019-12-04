import express from 'express'
import { requireAuth } from '../middleware'

// controllers
import { TransactionController } from '../controllers'

const transactionRouter = express.Router()

// require user to be authenticated for these routes
transactionRouter.use(requireAuth)

transactionRouter.post('/', TransactionController.addTransaction)
transactionRouter.get('/', TransactionController.getTransactions)
transactionRouter.get('/summary', TransactionController.getSummary)
transactionRouter.patch(
  '/:transactionId',
  TransactionController.updateTransaction
)
transactionRouter.get('/:transactionId', TransactionController.getTransaction)
transactionRouter.delete(
  '/:transactionId',
  TransactionController.deleteTransaction
)

export default transactionRouter
