import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, Switch } from 'react-router-dom'

// Components
import Header from './Header'
import Landing from './Landing'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Transactions from './Transactions'

// Selectors
import { getUser } from '../reducers/userReducer'

// Styling
import CssBaseline from '@material-ui/core/CssBaseline'

// Actions Creators
import { fetchUser } from '../actions'


const PageDoesExist = () => "Page does not exist"

const App = ({ fetchUser, user }) => {
  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  if (['PENDING', 'UNINIT'].includes(user.status)) {
    return 'LOADING...'
  }

  if (user.status === 'ERROR') {
    return 'ERROR obtaining user'
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
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
        <Route path="*" component={PageDoesExist} />
      </Switch>
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
