import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import CssBaseline from '@material-ui/core/CssBaseline'

// Actions Creators
import { fetchUser } from '../actions'

const App = ({ children, fetchUser }) => {
  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <>
      <CssBaseline />
      {children}
    </>
  )
}

export default connect(null, {
  fetchUser
})(App)
