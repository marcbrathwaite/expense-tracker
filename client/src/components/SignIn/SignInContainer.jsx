import React, { useState } from 'react'
import { connect } from 'react-redux'

// Components
import SignIn from './SignIn'

// Selectors
import {
  getUser
} from '../../reducers/userReducer'

// action creators
import { signInUser } from '../../actions'

// utils
import { isValidEmail, isValidPassword } from '../../utils'

// Constants
import { ASYNC_STATUS } from '../../utils/constants'

const { ERROR } = ASYNC_STATUS

const SignInContainer = ({
  user,
  signInUser,
}) => {
  const isIncorrectCredentials = user.signInStatus === ERROR
  const isServiceError = user.status === ERROR

  const [formInputs, setFormInputs] = useState({
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
    }
  })


  function handleSignIn(e) {
    e.preventDefault()
    let canSignIn = true
    // Loop through values , checking the validation
    Object.keys(formInputs).forEach(key => {
      // Get current state of input file
      const currentState = formInputs[key]
      // Get value of the input field
      const { value } = currentState
      // if the value fails validation, set the error key to true and canSignIn to false
      if (!formInputs[key].validation(value)) {
        setFormInputs({
          ...formInputs,
          [key]: {
            ...currentState,
            error: true
          }
        })
        canSignIn = false
      }
    })
    if (canSignIn) {
      signInUser(formInputs.email.value, formInputs.password.value)
    }
  }

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
    <SignIn
      handleSignIn={handleSignIn}
      handleInputChange={handleInputChange}
      handleOnBlur={handleOnBlur}
      formInputs={formInputs}
      isIncorrectCredentials={isIncorrectCredentials}
      isServiceError={isServiceError}
    />
  )
}

function mapStateToProps(state) {
  return {
    user: getUser(state)
  }
}

export default connect(mapStateToProps, {
  signInUser
})(SignInContainer)
