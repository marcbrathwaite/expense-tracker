import { FETCH_TRANSACTIONS } from '../actions/fetchTransactions'

import { ASYNC_STATUS } from '../utils/constants'

const { UNINIT, PENDING, SUCCESS, ERROR } = ASYNC_STATUS

const defaultState = {
  status: UNINIT,
  data: null,
  total: null,
  error: null
}

export default (state = defaultState, action)  => {
  switch (action.type) {
    case `${FETCH_TRANSACTIONS}_${PENDING}`: 
      return {
        ...state,
        status: PENDING
      }
    case `${FETCH_TRANSACTIONS}_${SUCCESS}`:
      return {
        ...state,
        status: SUCCESS,
        data: action.payload,
        total: action.meta.searchCount
      }
    case `${FETCH_TRANSACTIONS}_${ERROR}`:
      return {
        ...state,
        status: ERROR,
        error: action.error
      }
    default:
      return state
  }
}

// selectors

export const getTransactions = ({ transactions }) => transactions
