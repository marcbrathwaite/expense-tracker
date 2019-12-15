import React from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

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
  handleSignIn,
  handleInputChange,
  handleOnBlur,
  formInputs,
  isIncorrectCredentials,
  isServiceError
}) => {
  const classes = useStyles()

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
