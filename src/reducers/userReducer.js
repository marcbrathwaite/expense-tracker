import { FETCH_USER } from '../actions/'

const defaultState = null

export default function(state = defaultState, action) {
  switch (action.type) {
    case FETCH_USER:
      // if there is a payload, user is login. Return false if user not login
      return action.payload || false
    default:
      return state
  }
}
