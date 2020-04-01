import { TransactionManager } from '../managers'

// Action creators
import { fetchTransactions } from '.'

// Selectors
import { getTransactions } from '../reducers/transactionsReducer'

import { ASYNC_STATUS } from '../utils/constants'

const { PENDING, SUCCESS, ERROR } = ASYNC_STATUS

export const ADD_TRANSACTION = 'ADD_TRANSACTION'

export const addTransaction = (transaction) => {
  return async (dispatch, getState) => {
    try {
      // Set Action type to PENDING
      dispatch({
        type: `${ADD_TRANSACTION}_${PENDING}`
      })
      // call to Manager add Transaction
      const res = await TransactionManager.sharedInstance.addTransaction(
        transaction
      )

      const state = getState()
      // Get fetch transactions page from state
      const { page } = getTransactions(state)
      // Set action type to success
      dispatch({
        type: `${ADD_TRANSACTION}_${SUCCESS}`,
        payload: res.data.transaction
      })
      // dispatch fetchTransaction action
      dispatch(fetchTransactions({
        page: page.current + 1,
        limit: page.rows
      }))
    } catch {
      dispatch({
        type: `${ADD_TRANSACTION}_${ERROR}`
      })
    }
  }
}
