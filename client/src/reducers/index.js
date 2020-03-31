import { combineReducers } from 'redux'
import userReducer from './userReducer'
import transactionsReducer from './transactionsReducer'

const reducers = combineReducers({
  user: userReducer,
  transactions: transactionsReducer
})

export default reducers
