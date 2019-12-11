import { TransactionManager } from '../managers'

import { ASYNC_STATUS } from '../utils/constants'

const { PENDING, SUCCESS, ERROR } = ASYNC_STATUS

export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS'

export function fetchTransactions() {
  return async function(dispatch) {
    try {
      dispatch({
        type: `${FETCH_TRANSACTIONS}_${PENDING}`
      })

      const res = await TransactionManager.sharedInstance.getTransactions()
      dispatch({
        type: `${FETCH_TRANSACTIONS}_${SUCCESS}`,
        signInStatus: SUCCESS,
        meta: res.data.meta,
        payload: res.data.transactions
      })
    } catch (e) {
      // if user is not signed in
      if (e.name === 'SignInError') {
        dispatch({
          type: `${FETCH_TRANSACTIONS}_${ERROR}`,
          signInStatus: ERROR
        })
      } else {
        dispatch({
          type: `${FETCH_TRANSACTIONS}_${ERROR}`
        })
      }
    }
  }
}
