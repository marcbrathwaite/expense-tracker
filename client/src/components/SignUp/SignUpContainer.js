import { connect } from 'react-redux'

// Components
import SignUp from './SignUp'

// Selectors
import {
  getUserData,
  getUserAsyncStatus,
  getUserSignUpStatus
} from '../../reducers/userReducer'

// action creators
import { signUpUser } from '../../actions'

function mapStateToProps(state) {
  return {
    user: getUserData(state),
    userAsyncStatus: getUserAsyncStatus(state),
    userSignUpStatus: getUserSignUpStatus(state)
  }
}

export default connect(mapStateToProps, {
  signUpUser
})(SignUp)
