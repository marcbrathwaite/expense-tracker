import { connect } from 'react-redux'

// Components
import SignIn from './SignIn'

// Selectors
import {
  getUserData,
  getUserAsyncStatus,
  getUserSignInStatus
} from '../../reducers/userReducer'

// action creators
import { signInUser } from '../../actions'

function mapStateToProps(state) {
  return {
    user: getUserData(state),
    userAsyncStatus: getUserAsyncStatus(state),
    userSignInStatus: getUserSignInStatus(state)
  }
}

export default connect(mapStateToProps, {
  signInUser
})(SignIn)
