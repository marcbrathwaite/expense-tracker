import React from 'react'
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
  errorText: {
    color: 'red',
    marginBottom: theme.spacing(1)
  }
}))

const SignUp = ({
  handleSignUp,
  handleInputChange,
  handleOnBlur,
  formInputs,
  isAccountConflict,
  isServiceError
}) => {
  const classes = useStyles()

  return (
    <Container component="main" maxWidth="lg" className={classes.container}>
      <Card className={classes.signInCard}>
        <CardContent>
          <Typography variant="h5" className={classes.signInText}>
            Sign Up
          </Typography>
          {isAccountConflict && (
            <Typography variant="body2" className={classes.errorText}>
              Account already exists
            </Typography>
          )}
          {isServiceError && (
            <Typography variant="body2" className={classes.errorText}>
              We apologize! Something went wrong! Please try again!
            </Typography>
          )}
          <form className={classes.form}>
            <TextField
              error={formInputs.name.error}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name={formInputs.name.name}
              value={formInputs.name.value}
              autoComplete="name"
              autoFocus
              onBlur={handleOnBlur}
              onChange={handleInputChange}
              helperText="Enter full name"
            />
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
            <TextField
              error={formInputs.passwordConfirm.error}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name={formInputs.passwordConfirm.name}
              value={formInputs.passwordConfirm.value}
              label="Confirm Password"
              type="password"
              id="passwordConfirm"
              onChange={handleInputChange}
              onBlur={handleOnBlur}
              helperText="Must match password above"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  )
}

export default SignUp
