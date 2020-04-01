import { combineReducers } from 'redux'
import userReducer from './userReducer'
import transactionsReducer from './transactionsReducer'
import transactionReducer from './transactionReducer'

const reducers = combineReducers({
  user: userReducer,
  transactions: transactionsReducer,
  currentTransaction: transactionReducer
})

export default reducers
