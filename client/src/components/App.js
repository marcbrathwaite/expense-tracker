import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, Switch } from 'react-router-dom'

// Components
import Header from './Header'
import Landing from './Landing'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Transactions from './Transactions'
import Spinner from './Common/Spinner'
import PageDoesNotExist from './PageDoesNotExist'

// Selectors
import { getUser } from '../reducers/userReducer'

// Styling
import CssBaseline from '@material-ui/core/CssBaseline'

// Actions Creators
import { fetchUser } from '../actions'

// utils
import { ASYNC_STATUS } from '../utils/constants'
const { PENDING, ERROR, UNINIT } = ASYNC_STATUS

const App = ({ fetchUser, user }) => {
  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  if (user.status === ERROR) {
    return 'ERROR obtaining user'
  }

  return (
    <>
      <CssBaseline />
      <Header user={user} />
      {[PENDING, UNINIT].includes(user.status) ? (
        <Spinner verticalPadding={20} />
      ) : (
        <Switch>
          <Route exact path="/" render={() => <Landing user={user} />} />
          <Route
            path="/users/sign-up"
            exact
            render={() => (user.data ? <Redirect to="/" /> : <SignUp />)}
          />
          <Route
            path="/users/sign-in"
            exact
            render={() => (user.data ? <Redirect to="/" /> : <SignIn />)}
          />
          <Route
            path="/transactions"
            exact
            component={() =>
              user.data ? <Transactions /> : <Redirect to="/users/sign-in" />
            }
          />
          <Route path="*" component={PageDoesNotExist} />
        </Switch>
      )}
    </>
  )
}
const mapStateToProps = state => {
  return {
    user: getUser(state)
  }
}

export default connect(mapStateToProps, {
  fetchUser
})(App)
