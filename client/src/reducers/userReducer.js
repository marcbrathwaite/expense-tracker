import { FETCH_USER, SIGN_IN } from '../actions'

import { ASYNC_STATUS } from '../utils/constants'

const { UNINIT, PENDING, SUCCESS, ERROR } = ASYNC_STATUS

const defaultState = {
  status: UNINIT, // Async action status
  signInStatus: UNINIT, // status when user attempts tp signin
  data: null
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case `${FETCH_USER}_${PENDING}`:
    case `${SIGN_IN}_${PENDING}`:
      return {
        ...state,
        status: PENDING
      }
    case `${FETCH_USER}_${SUCCESS}`:
      return {
        ...state,
        status: SUCCESS,
        data: action.payload
      }
    case `${FETCH_USER}_${ERROR}`:
    case `${SIGN_IN}_${ERROR}`:
      return {
        ...state,
        status: ERROR
      }
    case `${SIGN_IN}_${SUCCESS}`:
      return {
        ...state,
        status: SUCCESS,
        signInStatus: action.signInStatus,
        data: action.payload
      }
    default:
      return state
  }
}

// selectors
export function getUserData({ user }) {
  return user.data
}

export function getUserAsyncStatus({ user }) {
  return user.status
}

export function getUserSignInStatus({ user }) {
  return user.signInStatus
}
