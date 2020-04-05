import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

// Action Creators
import { signOutUser } from '../../actions'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  titleLink: {
    textDecoration: 'none',
    color: '#FFF'
  }
}))

const Header = ({ user, signOutUser }) => {
  const classes = useStyles()

  function renderButtons() {
    if (user.data) {
      return (
        <>
          <Button color="inherit" component={Link} to="/transactions">
            Transactions
          </Button>
          <Button color="inherit" onClick={() => signOutUser()}>
            Sign Out
          </Button>
        </>
      )
    }
    return (
      <Button color="inherit" component={Link} to="/users/sign-in">
        Sign In
      </Button>
    )
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h1" className={classes.title}>
            <Link to="/" className={classes.titleLink}>
              Expense-Tracker
            </Link>
          </Typography>
          <Button color="inherit" component={Link} to="/">
        Home
      </Button>
          {renderButtons()}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default connect(null, {
  signOutUser
})(Header)
