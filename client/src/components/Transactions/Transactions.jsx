import React, { useEffect } from 'react'

const Transactions = ({ user, history }) => {
  useEffect(() => {
    if (user === false) {
      history.push('/users/sign_in')
    }
  }, [user, history])

  return <h2>Transactions</h2>
}

export default Transactions
