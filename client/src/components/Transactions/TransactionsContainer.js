import { connect } from 'react-redux'

//Components
import Transactions from './Transactions'

// Selectors
import { getUserData } from '../../reducers/userReducer'

function mapStateToProps(state) {
  return {
    user: getUserData(state)
  }
}

export default connect(mapStateToProps)(Transactions)
