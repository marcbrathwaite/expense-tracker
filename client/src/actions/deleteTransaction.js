import { TransactionManager } from '../managers'

import { ASYNC_STATUS } from '../utils/constants'

const { PENDING, SUCCESS, ERROR } = ASYNC_STATUS

export const DELETE_TRANSACTION = 'DELETE_TRANSACTION'

export const deleteTransaction = transactionId => {
  return async dispatch => {
    try {
      // set Action type to Pending
      dispatch({
        type: `${DELETE_TRANSACTION}_${PENDING}`
      })

      // call to manager delete transaction
      await TransactionManager.sharedInstance.deleteTransaction(transactionId)

      // Set action type to success
      dispatch({
        type: `${DELETE_TRANSACTION}_${SUCCESS}`
      })
    } catch (e) {
      dispatch({
        type: `${DELETE_TRANSACTION}_${ERROR}`
      })
    }
  }
}
