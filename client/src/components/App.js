import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// Actions Creators
import { fetchUser } from '../actions'

const App = ({ children, fetchUser }) => {
  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return <div>{children}</div>
}

export default connect(null, {
  fetchUser
})(App)
