import { connect } from 'react-redux'

// Components
import Header from './Header'

// Action Creators
import { signOutUser } from '../../actions'

// Selectors
import { getUserData } from '../../reducers/userReducer'

function mapStateToProps(state) {
  return {
    user: getUserData(state)
  }
}

export default connect(mapStateToProps, {
  signOutUser
})(Header)
