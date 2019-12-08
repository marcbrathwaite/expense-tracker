import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}))

const Header = ({ user, signOutUser }) => {
  const classes = useStyles()

  function renderButtons() {
    if (user) {
      return (
        <Button color="inherit" onClick={() => signOutUser()}>
          Sign Out
        </Button>
      )
    }
    return (
      <Button color="inherit" component={Link} to="/users/sign_in">
        Sign In
      </Button>
    )
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Expense-Tracker
          </Typography>
          {renderButtons()}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
