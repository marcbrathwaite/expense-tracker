import { TransactionManager } from '../managers'

import { ASYNC_STATUS } from '../utils/constants'

const { PENDING, SUCCESS, ERROR } = ASYNC_STATUS

export const ADD_TRANSACTION = 'ADD_TRANSACTION'

export function addTransaction(transaction) {
  return async function(dispatch) {
    try {
      // Set Action type to PENDING
      dispatch({
        type: `${ADD_TRANSACTION}_${PENDING}`
      })
      // call to Manager add Transaction
      const res = await TransactionManager.sharedInstance.addTransaction(
        transaction
      )
      // Set action type to success
      dispatch({
        type: `${ADD_TRANSACTION}_${SUCCESS}`,
        payload: res.data.transaction
      })
    } catch {
      dispatch({
        type: `${ADD_TRANSACTION}_${ERROR}`
      })
    }
  }
}
