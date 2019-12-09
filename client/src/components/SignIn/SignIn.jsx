import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

// utils
import { isValidEmail, isValidPassword } from '../../utils'

// Constants
import { ASYNC_STATUS } from '../../utils/constants'

const { ERROR } = ASYNC_STATUS

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5, 0, 5, 0)
  },
  signInCard: {
    padding: theme.spacing(2),
    maxWidth: 500
  },
  signInText: {
    marginBottom: theme.spacing(1)
  },
  form: {
    marginBottom: theme.spacing(1),
    width: '100%'
  },
  submit: {
    margin: theme.spacing(1, 0, 2, 0)
  },
  createText: {
    marginBottom: theme.spacing(1)
  },
  createButton: {
    background: '#8BC34A',
    color: 'white'
  },
  errorText: {
    color: 'red',
    marginBottom: theme.spacing(1)
  }
}))

const SignIn = ({
  signInUser,
  user,
  userAsyncStatus,
  userSignInStatus,
  history
}) => {
  const classes = useStyles()

  const isIncorrectCredentials = userSignInStatus === ERROR
  const isServiceError = userAsyncStatus === ERROR

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

  useEffect(() => {
    if (user) {
      history.push('/transactions')
    }
  }, [user, history])

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
    <Container component="main" maxWidth="lg" className={classes.container}>
      <Card className={classes.signInCard}>
        <CardContent>
          <Typography variant="h5" className={classes.signInText}>
            Sign in
          </Typography>
          {isIncorrectCredentials && (
            <Typography variant="body2" className={classes.errorText}>
              Incorrect Email/Password Combination
            </Typography>
          )}
          {isServiceError && (
            <Typography variant="body2" className={classes.errorText}>
              We apologize! Something went wrong! Please try again!
            </Typography>
          )}
          <form className={classes.form}>
            <TextField
              error={formInputs.email.error}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name={formInputs.email.name}
              value={formInputs.email.value}
              autoComplete="email"
              autoFocus
              onBlur={handleOnBlur}
              onChange={handleInputChange}
              helperText="Enter email address"
            />
            <TextField
              error={formInputs.password.error}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name={formInputs.password.name}
              value={formInputs.password.value}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputChange}
              onBlur={handleOnBlur}
              helperText="At least 8 characters long (At least one upperCase, one lowercase and one digit) with no spaces."
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSignIn}
            >
              Sign In
            </Button>
          </form>
          <Typography variant="subtitle2" className={classes.createText}>
            Don't have an account as yet?
          </Typography>
          <Button
            className={classes.createButton}
            component={Link}
            to="/users/sign_up"
          >
            Create An Account
          </Button>
        </CardContent>
      </Card>
    </Container>
  )
}

export default SignIn
