import { ADD_TRANSACTION, RESET_TRANSACTION } from '../actions'

import { ASYNC_STATUS } from '../utils/constants'

const { UNINIT, PENDING, SUCCESS, ERROR } = ASYNC_STATUS

const defaultState = {
  ADD: {
    status: UNINIT,
    data: null
  },
  UPDATE: {
    status: UNINIT,
    data: null
  },
  DELETE: {
    status: UNINIT
  }
}

const actions = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  UPDATE: 'UPDATE'
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case `${ADD_TRANSACTION}_${PENDING}`:
      return {
        ...state,
        ADD: {
          ...state.ADD,
          status: PENDING
        }
      }
    case `${ADD_TRANSACTION}_${SUCCESS}`:
      return {
        ...state,
        ADD: {
          ...state.ADD,
          status: SUCCESS,
          data: action.payload
        }
      }
    case `${ADD_TRANSACTION}_${ERROR}`:
      return {
        ...state,
        ADD: {
          ...state.ADD,
          status: ERROR
        }
      }
    case RESET_TRANSACTION:
      return defaultState
    default:
      return state
  }
}

// selectos
export function getTransaction({ transaction }) {
  return transaction.data
}
