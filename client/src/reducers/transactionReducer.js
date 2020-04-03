import {
  ADD_TRANSACTION,
  RESET_TRANSACTION,
  DELETE_TRANSACTION
} from '../actions'

import { ASYNC_STATUS } from '../utils/constants'

const { UNINIT, PENDING, SUCCESS, ERROR } = ASYNC_STATUS

const defaultState = {
  add: {
    status: UNINIT,
    data: null
  },
  update: {
    status: UNINIT,
    data: null
  },
  delete: {
    status: UNINIT
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case `${ADD_TRANSACTION}_${PENDING}`:
      return {
        ...state,
        add: {
          ...state.add,
          status: PENDING
        }
      }
    case `${DELETE_TRANSACTION}_${PENDING}`:
      return {
        ...state,
        delete: {
          ...state.delete,
          status: PENDING
        }
      }
    case `${ADD_TRANSACTION}_${SUCCESS}`:
      return {
        ...state,
        add: {
          ...state.add,
          status: SUCCESS,
          data: action.payload
        }
      }
    case `${DELETE_TRANSACTION}_${SUCCESS}`:
      return {
        ...state,
        delete: {
          ...state.delete,
          status: SUCCESS
        }
      }
    case `${ADD_TRANSACTION}_${ERROR}`:
      return {
        ...state,
        add: {
          ...state.add,
          status: ERROR
        }
      }
    case `${DELETE_TRANSACTION}_${ERROR}`:
      return {
        ...state,
        delete: {
          ...state.delete,
          status: ERROR
        }
      }
    case RESET_TRANSACTION:
      return defaultState
    default:
      return state
  }
}

// selectors
export const getAddTransaction = ({ currentTransaction }) => {
  return currentTransaction.add
}

export const getDeleteTransaction = ({ currentTransaction }) => {
  return currentTransaction.delete
}
