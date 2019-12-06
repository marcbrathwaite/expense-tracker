import React from 'react'
import { Route } from 'react-router-dom'

const Header = () => <h2>Header</h2>
const Landing = () => <h2>Main</h2>
const SignUp = () => <h2>Sign Up</h2>

const getUIRoutes = () => {
  return (
    <>
      <Header />
      <Route exact path="/" component={Landing} />
      <Route path="/user/sign_up" component={SignUp} />
    </>
  )
}

export default getUIRoutes
