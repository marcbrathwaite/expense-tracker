import { FETCH_TRANSACTIONS, SET_TRANSACTIONS_PAGE } from '../actions'

import { ASYNC_STATUS } from '../utils/constants'

const { UNINIT, PENDING, SUCCESS, ERROR } = ASYNC_STATUS

const defaultState = {
  status: UNINIT,
  data: null,
  total: null,
  error: null,
  page: {
    current: 0,
    rows: 10
  }
}

export default (state = defaultState, action) => {
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
    case SET_TRANSACTIONS_PAGE:
      return {
        ...state,
        page: {
          ...action.payload
        }
      }
    default:
      return state
  }
}

// selectors

export const getTransactions = ({ transactions }) => transactions
