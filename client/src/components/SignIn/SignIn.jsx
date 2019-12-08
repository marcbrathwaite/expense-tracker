import React, { useEffect } from 'react'

// Constants
import { ASYNC_STATUS } from '../../utils/constants'

const { ERROR } = ASYNC_STATUS

const SignIn = ({
  signInUser,
  user,
  userAsyncStatus,
  userSignInStatus,
  history
}) => {
  const isIncorrectCredentials = userSignInStatus === ERROR

  useEffect(() => {
    if (user) {
      history.push('/transactions')
    }
  }, [user, history])

  function handleSignIn() {
    signInUser('marcbrathwaite@gmail.com', 'pass1234')
  }

  return (
    <>
      <h2>SignIn</h2>
      {isIncorrectCredentials && <p>Incorrect Email or password</p>}
      <button onClick={handleSignIn}>Sign In</button>
    </>
  )
}

export default SignIn
