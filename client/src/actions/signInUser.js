import { UserManager } from '../managers'

// contants
import { ASYNC_STATUS } from '../utils/constants'

const { PENDING, SUCCESS, ERROR } = ASYNC_STATUS

export const SIGN_IN = 'SIGN_IN'

export function signInUser(email, password) {
  return async function(dispatch) {
    try {
      // Set Status to PENDING
      dispatch({
        type: `${SIGN_IN}_${PENDING}`
      })

      const res = await UserManager.sharedInstance.signIn(email, password)
      // Set Action type to SUCCESS and signInStatus to SUCCESS
      dispatch({
        type: `${SIGN_IN}_${SUCCESS}`,
        signInStatus: SUCCESS,
        payload: res.data.user
      })
    } catch (e) {
      // set user to false if no user info recieved
      if (e.name === 'SignInError') {
        dispatch({
          type: `${SIGN_IN}_${SUCCESS}`,
          signInStatus: ERROR,
          payload: false
        })
      } else {
        // set status to Error
        dispatch({
          type: `${SIGN_IN}_${ERROR}`
        })
      }
    }
  }
}
