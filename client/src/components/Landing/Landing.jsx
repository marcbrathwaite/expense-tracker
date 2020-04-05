import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(12, 0, 0, 0),
    display: 'flex',
    justifyContent: 'center'
  },
  introContainer: {
    maxWidth: 900
  },
  githubLink: {
    textDecoration: 'underline',
    color: '#000'
  },
  introTextWrapper: {
    margin: theme.spacing(0, 0, 3, 0)
  },
  text: {
    margin: theme.spacing(0, 0, 1, 0)
  },
  buttonContainer: {
    display: 'flex'
  },
  button: {
    margin: theme.spacing(0, 2, 0, 0)
  }
}))

const Landing = ({ user }) => {
  console.log('user', user)
  const classes = useStyles()
  return (
    <Container component="main" maxWidth="lg" className={classes.container}>
      <div className={classes.introContainer}>
        <div className={classes.introTextWrapper}>
          <Typography variant="body1" component="p">
            Welcome to my ongoing Expense Tracker project, where income and
            expenses can be tracked and persisted. This was created using React
            with Redux on the front-end, and Node/Express and MongoDB on the
            backend. User authentication was implemented using JSON Web Tokens.
          </Typography>
          <Typography variant="body1" component="p">
            The GitHub Repo for this project could be found at:{' '}
            <a
              href="https://github.com/marcbrathwaite/expense-tracker"
              className={classes.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Expense Tracker GitHub
            </a>
          </Typography>
        </div>
        {user.data ? (
          <div>
            <Typography variant="body1" component="p" className={classes.text}>
              Click button below to view your transactions
            </Typography>
            <Button
              color="primary"
              variant="contained"
              component={Link}
              to="/transactions"
            >
              Transactions
            </Button>
          </div>
        ) : (
          <div>
            <Typography variant="body1" component="p" className={classes.text}>
                Click one of the buttons below to sign in or sign up
            </Typography>
              <div className={classes.buttonContainer}>
                <Button
                  className={classes.button}
                  color="primary"
                  variant="contained"
                  component={Link}
                  to="/users/sign-in"
                >
                  Sign In
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  component={Link}
                  to="/users/sign-up"
                >
                  Sign Up
                </Button>
              </div>
          </div>
        )}
      </div>
    </Container>
  )
}

export default Landing
