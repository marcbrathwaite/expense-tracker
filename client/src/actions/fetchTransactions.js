import { TransactionManager } from '../managers'

import { ASYNC_STATUS } from '../utils/constants'

const { PENDING, SUCCESS, ERROR } = ASYNC_STATUS

export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS'

export function fetchTransactions(params) {
  return async function(dispatch) {
    try {
      dispatch({
        type: `${FETCH_TRANSACTIONS}_${PENDING}`
      })

      const { page, limit } = params
      const res = await TransactionManager.sharedInstance.getTransactions({
        page,
        limit
      })
      dispatch({
        type: `${FETCH_TRANSACTIONS}_${SUCCESS}`,
        signInStatus: SUCCESS,
        meta: res.data.meta,
        payload: res.data.transactions
      })
    } catch (error) {
      dispatch({
        type: `${FETCH_TRANSACTIONS}_${ERROR}`,
        error
      })
    }
  }
}
