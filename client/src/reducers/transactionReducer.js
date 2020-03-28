import { ADD_TRANSACTION } from '../actions'

import { ASYNC_STATUS } from '../utils/constants'

const { UNINIT, PENDING, SUCCESS, ERROR } = ASYNC_STATUS

const defaultState = {
  status: UNINIT,
  action: null,
  data: null
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
        status: PENDING
      }
    case `${ADD_TRANSACTION}_${SUCCESS}`:
      return {
        ...state,
        status: SUCCESS,
        action: actions.ADD,
        data: action.payload
      }
    case `${ADD_TRANSACTION}_${ERROR}`:
      return {
        ...state,
        status: ERROR
      }
    default:
      return state
  }
}

// selectos
export function getTransaction({ transaction }) {
  return transaction.data
}
