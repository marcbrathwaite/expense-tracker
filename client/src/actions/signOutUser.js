import { UserManager } from '../managers'

// contants
import { ASYNC_STATUS } from '../utils/constants'

const { PENDING, SUCCESS, ERROR } = ASYNC_STATUS

export const SIGN_OUT = 'SIGN_OUT'

export function signOutUser() {
  return async function(dispatch) {
    try {
      // Set Status to PENDING
      dispatch({
        type: `${SIGN_OUT}_${PENDING}`
      })

      // send request to sign out on server side
      await UserManager.sharedInstance.signOut()
      // Set Action type to SUCCESS and signInStatus to SUCCESS
      dispatch({
        type: `${SIGN_OUT}_${SUCCESS}`,
        payload: false
      })
    } catch {
      // If async call fails, still sign out on client side
      dispatch({
        type: `${SIGN_OUT}_${ERROR}`
      })
    }
  }
}
