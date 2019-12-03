import express from 'express'
import { requireAuth } from '../middleware'

// controllers
import { TransactionController } from '../controllers'

const transactionRouter = express.Router()

// require user to be authenticated for these routes
transactionRouter.use(requireAuth)

transactionRouter.post('/', TransactionController.addTransaction)
transactionRouter.patch(
  '/:transactionId',
  TransactionController.updateTransaction
)

export default transactionRouter
