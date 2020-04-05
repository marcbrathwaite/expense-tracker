import { TransactionManager } from '../managers'

import { getSummary } from '.'

import { ASYNC_STATUS } from '../utils/constants'

const { PENDING, SUCCESS, ERROR } = ASYNC_STATUS

export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS'

export const fetchTransactions = ({ page, limit }) => {
  return async dispatch => {
    try {
      dispatch({
        type: `${FETCH_TRANSACTIONS}_${PENDING}`
      })

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
      dispatch(getSummary())
    } catch (error) {
      dispatch({
        type: `${FETCH_TRANSACTIONS}_${ERROR}`,
        error
      })
    }
  }
}
