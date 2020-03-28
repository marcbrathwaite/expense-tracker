import { combineReducers } from 'redux'
import userReducer from './userReducer'
import transactionReducer from './transactionReducer'

const reducers = combineReducers({
  user: userReducer,
  transaction: transactionReducer
})

export default reducers
