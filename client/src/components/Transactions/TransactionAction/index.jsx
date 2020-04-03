import React from 'react'
import { connect } from 'react-redux'

// Components
import AddTransaction from './AddTransaction'
import DeleteTransaction from './DeleteTransaction'

// Actions
import { addTransaction, deleteTransaction } from '../../../actions'

// utils
import { TRANS_ACTIONS } from '../../../utils/constants'
const { UPDATE, DELETE } = TRANS_ACTIONS

const TransactionAction = ({
  action,
  addTransaction,
  deleteTransaction,
  handleCancel,
  status,
  transactionId
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
      return <div> Update {transactionId}</div>
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

export default connect(null, {
  addTransaction,
  deleteTransaction
})(TransactionAction)
