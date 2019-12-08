import React from 'react'
import { Route } from 'react-router-dom'

// Components
import Header from './components/Header'
import Landing from './components/Landing'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Transactions from './components/Transactions'

const getUIRoutes = () => {
  return (
    <>
      <Header />
      <Route exact path="/" component={Landing} />
      <Route path="/users/sign_up" component={SignUp} />
      <Route path="/users/sign_in" component={SignIn} />
      <Route path="/transactions" component={Transactions} />
    </>
  )
}

export default getUIRoutes
