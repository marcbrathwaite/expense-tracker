import { TransactionManager } from '../managers'

import { ASYNC_STATUS } from '../utils/constants'

const { PENDING, SUCCESS, ERROR } = ASYNC_STATUS

export const UPDATE_TRANSACTION = 'UPDATE_TRANSACTION'

export const updateTransaction = (transactionId, transaction) => {
  return async dispatch => {
    try {
      // Set Action type to PENDING
      dispatch({
        type: `${UPDATE_TRANSACTION}_${PENDING}`
      })
      // call to Manager add Transaction
      const res = await TransactionManager.sharedInstance.updateTransaction(
        transactionId,
        transaction
      )

      // Set action type to success
      dispatch({
        type: `${UPDATE_TRANSACTION}_${SUCCESS}`,
        payload: res.data.transaction
      })
    } catch {
      dispatch({
        type: `${UPDATE_TRANSACTION}_${ERROR}`
      })
    }
  }
}
