import React, { useEffect } from 'react'
import { connect } from 'react-redux'

//Components
import Transactions from './Transactions'

// Selectors
import { getUserData } from '../../reducers/userReducer'

// Actions

const TransactionsContainer = ({ user, history }) => {
  // FIXME: make custom hook?
  useEffect(() => {
    if (user === false) {
      history.push('/users/sign_in')
    }
  }, [user, history])

  return <Transactions />
}

function mapStateToProps(state) {
  return {
    user: getUserData(state)
  }
}

export default connect(mapStateToProps)(TransactionsContainer)
