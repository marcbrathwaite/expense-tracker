import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

// Components
import SignUp from './SignUp'

// Selectors
import {
  getUserData,
  getUserAsyncStatus,
  getUserSignUpStatus
} from '../../reducers/userReducer'

// action creators
import { signUpUser } from '../../actions'

// utils
import { isValidEmail, isValidPassword, isNotEmpty } from '../../utils'

// Constants
import { ASYNC_STATUS } from '../../utils/constants'

const { ERROR } = ASYNC_STATUS

const SignUpContainer = ({
  signUpUser,
  user,
  userAsyncStatus,
  userSignUpStatus,
  history
}) => {
  const isAccountConflict = userSignUpStatus === ERROR
  const isServiceError = userAsyncStatus === ERROR

  const [formInputs, setFormInputs] = useState({
    name: {
      name: 'name',
      value: '',
      validation: isNotEmpty,
      error: false
    },
    email: {
      name: 'email',
      value: '',
      validation: isValidEmail,
      error: false
    },
    password: {
      name: 'password',
      value: '',
      validation: isValidPassword,
      error: false
    },
    passwordConfirm: {
      name: 'passwordConfirm',
      value: '',
      validation: isValidPassword,
      error: false
    }
  })

  useEffect(() => {
    if (user) {
      history.push('/transactions')
    }
  }, [user, history])

  function handleSignUp(e) {
    e.preventDefault()
    // check is password and password confirm matches
    let canSignUp =
      formInputs.password.value === formInputs.passwordConfirm.value
    // Loop through values , checking the validation
    Object.keys(formInputs).forEach(key => {
      // Get current state of input file
      const currentState = formInputs[key]
      // Get value of the input field
      const { value } = currentState
      // if the value fails validation, set the error key to true and canSignUp to false
      if (!formInputs[key].validation(value)) {
        setFormInputs({
          ...formInputs,
          [key]: {
            ...currentState,
            error: true
          }
        })
        canSignUp = false
      }
    })
    if (canSignUp) {
      signUpUser({
        name: formInputs.name.value,
        email: formInputs.email.value,
        password: formInputs.password.value,
        passwordConfirm: formInputs.passwordConfirm.value
      })
    }
  }

  // FIXME: can be reused
  function handleInputChange(e) {
    const { name, value } = e.target
    // get current state of input field
    const currentInputState = formInputs[name]
    setFormInputs({
      ...formInputs,
      [name]: {
        ...currentInputState,
        value
      }
    })
  }

  function handleOnBlur(e) {
    const { name, value } = e.target
    const currentInputState = formInputs[name]
    setFormInputs({
      ...formInputs,
      [name]: {
        ...currentInputState,
        error: !currentInputState.validation(value)
      }
    })
  }

  return (
    <SignUp
      handleSignUp={handleSignUp}
      handleInputChange={handleInputChange}
      handleOnBlur={handleOnBlur}
      formInputs={formInputs}
      isAccountConflict={isAccountConflict}
      isServiceError={isServiceError}
    />
  )
}

function mapStateToProps(state) {
  return {
    user: getUserData(state),
    userAsyncStatus: getUserAsyncStatus(state),
    userSignUpStatus: getUserSignUpStatus(state)
  }
}

export default connect(mapStateToProps, {
  signUpUser
})(SignUpContainer)
