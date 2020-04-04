import React from 'react'
import { connect } from 'react-redux'

// Components
import AddTransaction from './AddTransaction'
import DeleteTransaction from './DeleteTransaction'
import UpdateTransaction from './UpdateTransaction'

// Actions
import {
  addTransaction,
  deleteTransaction,
  updateTransaction
} from '../../../actions'

// Selectors
import { getTransactions } from '../../../reducers/transactionsReducer'

// utils
import { TRANS_ACTIONS } from '../../../utils/constants'
const { UPDATE, DELETE } = TRANS_ACTIONS

const TransactionAction = ({
  action,
  addTransaction,
  deleteTransaction,
  updateTransaction,
  handleCancel,
  status,
  transactionId,
  transactions
}) => {
  switch (action) {
    case DELETE:
      return (
        <DeleteTransaction
          handleDelete={() => deleteTransaction(transactionId)}
          handleCancel={handleCancel}
          status={status.delete}
        />
      )
    case UPDATE:
      // Get transaction with matching id
      const foundTransaction = transactions.find(
        trans => trans.id === transactionId
      )
      // Format date 
      const formattedTrans = {
        ...foundTransaction,
        date: new Date(foundTransaction.date)
      }
      return (
        <UpdateTransaction
          handleUpdate={updateTransaction}
          handleCancel={handleCancel}
          status={status.update}
          transactionToUpdate={formattedTrans}
        />
      )
    default:
      return (
        <AddTransaction
          handleAdd={addTransaction}
          handleCancel={handleCancel}
          status={status.add}
        />
      )
  }
}

const mapStateToProps = state => {
  return {
    transactions: getTransactions(state).data
  }
}

export default connect(mapStateToProps, {
  addTransaction,
  deleteTransaction,
  updateTransaction
})(TransactionAction)
