const express = require('express')
const { requireAuth } = require('../middleware')

// controllers
const { TransactionController } = require('../controllers')

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

module.exports = transactionRouter
