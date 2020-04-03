import { UserManager } from '../managers'

// contants
import { ASYNC_STATUS } from '../utils/constants'

const { PENDING, SUCCESS, ERROR } = ASYNC_STATUS

export const SIGN_UP = 'SIGN_UP'

export function signUpUser({ name, email, password, passwordConfirm }) {
  return async function(dispatch) {
    try {
      const userInfo = {
        name,
        email,
        password,
        passwordConfirm
      }
      // Set status to Pending
      dispatch({
        type: `${SIGN_UP}_${PENDING}`
      })

      const res = await UserManager.sharedInstance.signUp(userInfo)
      dispatch({
        type: `${SIGN_UP}_${SUCCESS}`,
        signUpStatus: SUCCESS,
        payload: res.data.user
      })
    } catch (e) {
      // set user to false if no user info receive
      if (e.name === 'SignUpError') {
        dispatch({
          type: `${SIGN_UP}_${SUCCESS}`,
          signUpStatus: ERROR,
          payload: null
        })
      } else {
        // set status to Error
        dispatch({
          type: `${SIGN_UP}_${ERROR}`
        })
      }
    }
  }
}
