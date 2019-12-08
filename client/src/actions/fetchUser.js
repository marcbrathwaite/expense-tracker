import { UserManager } from '../managers'

import { ASYNC_STATUS } from '../utils/constants'

const { PENDING, SUCCESS, ERROR } = ASYNC_STATUS

export const FETCH_USER = 'FETCH_USER'

export function fetchUser() {
  return async function(dispatch) {
    try {
      // Set Action type to PENDING
      dispatch({
        type: `${FETCH_USER}_${PENDING}`
      })

      const res = await UserManager.sharedInstance.getUser()
      // Set Action type to SUCCESS
      dispatch({
        type: `${FETCH_USER}_${SUCCESS}`,
        payload: res.data.user
      })
    } catch (e) {
      // set user to false if no user info recieved
      if (e.name === 'SignInError') {
        dispatch({
          type: `${FETCH_USER}_${SUCCESS}`,
          payload: false
        })
      } else {
        // set status to Error
        dispatch({
          type: `${FETCH_USER}_${ERROR}`
        })
      }
    }
  }
}
