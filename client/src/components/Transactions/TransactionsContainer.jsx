import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Modal from 'react-modal'

//Components
import TransactionsTable from './TransactionsTable'
import Spinner from '../Common/Spinner'
import AddTransactionCTA from './AddTransactionCTA'
import TransactionAction from './TransactionAction'
import Alert from './Alert'

// Actions
import {
  fetchTransactions,
  setTransactionsPage,
  resetTransaction
} from '../../actions'

// Selectors
import { getUser } from '../../reducers/userReducer'
import { getTransactions } from '../../reducers/transactionsReducer'
import {
  getAddTransaction,
  getDeleteTransaction
} from '../../reducers/transactionReducer'

// utils
import {
  ASYNC_STATUS,
  ROWS_PER_PAGE,
  TRANS_ACTIONS
} from '../../utils/constants'

const { PENDING, UNINIT, SUCCESS, ERROR } = ASYNC_STATUS
const { ADD, UPDATE, DELETE } = TRANS_ACTIONS

Modal.setAppElement('#root')

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(5, 0)
  }
}))

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const alertMessaging = {
  ADD: {
    SUCCESS: 'Transaction successfully added!',
    ERROR: 'Unable to add transaction at this time!'
  },
  UPDATE: {
    SUCCESS: 'Transaction successfully updated!',
    ERROR: 'Unable to update transaction at this time!'
  },
  DELETE: {
    SUCCESS: 'Transaction successfully deleted!',
    ERROR: 'Unable to delete transaction at this time!'
  }
}

const alertLevel = {
  SUCCESS: 'success',
  ERROR: 'error'
}

const TransactionsContainer = ({
  user,
  fetchTransactions,
  setTransactionsPage,
  transactions,
  page,
  transactionStatus,
  resetTransaction
}) => {
  const classes = useStyles()

  const [showModal, setShowModal] = useState(null)
  // state of alert for Adding, deleteing and updating transaction
  const [alert, setAlert] = useState({
    open: false,
    level: null,
    message: null
  })

  // transactionID needed for updating and deleting
  const [transactionId, setTransactionId] = useState(null)

  useEffect(() => {
    if (user.data !== null) {
      fetchTransactions({
        page: page.current + 1,
        limit: page.rows
      })
    }
  }, [user, fetchTransactions, page])

  useEffect(() => {
    // fetch transactions after Add, delete or update action
    if (Object.values(transactionStatus).some(val => val === SUCCESS)) {
      fetchTransactions({
        page: page.current + 1,
        limit: page.rows
      })
      // Clear transaction state
      resetTransaction()
    }
  }, [transactionStatus, fetchTransactions, resetTransaction, page])

  useEffect(() => {
    if ([SUCCESS, ERROR].includes(transactionStatus.add)) {
      setShowModal(null)
      // Set Alert state, so that alert would be show
      setAlert({
        open: true,
        level: alertLevel[transactionStatus.add],
        message: alertMessaging[ADD][transactionStatus.add]
      })
    } else if ([SUCCESS, ERROR].includes(transactionStatus.delete)) {
      setShowModal(null)
      // Set Alert state, so that alert would be show
      setAlert({
        open: true,
        level: alertLevel[transactionStatus.delete],
        message: alertMessaging[DELETE][transactionStatus.delete]
      })
    }
  }, [transactionStatus, showModal, setAlert])

  const handlePageChange = (event, newPage) => {
    setTransactionsPage({
      ...page,
      current: newPage
    })
  }

  const handleRowsPerPageChange = event => {
    setTransactionsPage({
      current: 0,
      rows: event.target.value
    })
  }


  const handleCloseModal = () => {
    setShowModal(null)
  }

  const handleAlertClose = () => {
    setAlert(false)
  }

  const handleTableIconClick = (id, action) => {
    setTransactionId(id)
    setShowModal(action)
  }

  // boolean for determining whether to open modal
  const isModalOpen = [ADD, UPDATE, DELETE].includes(showModal)

  return (
    <Container component="main" maxWidth="lg" className={classes.container}>
      <Typography variant="h5" component="h2">
        Transactions
      </Typography>
      <AddTransactionCTA handleCTAClick={() => setShowModal(ADD)} />
      {[UNINIT, PENDING].includes(transactions.status) ? (
        <Spinner />
      ) : (
        <TransactionsTable
          transactions={transactions.data}
          count={transactions.total}
          rowsPerPage={page.rows}
          rowsPerPageOptions={ROWS_PER_PAGE}
          page={page.current}
          handlePageChange={handlePageChange}
          handleRowsPerPageChange={handleRowsPerPageChange}
          handleTableIconClick={handleTableIconClick}
        />
      )}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} style={modalStyles}>
          <TransactionAction
            action={showModal}
            handleCancel={handleCloseModal}
            status={transactionStatus}
            transactionId={transactionId}
          />
        </Modal>
      )}
      {alert.open && (
        <Alert
          isOpen={alert.open}
          handleAlertClose={handleAlertClose}
          severity={alert.level}
          message={alert.message}
        />
      )}
    </Container>
  )
}

function mapStateToProps(state) {
  const transactions = getTransactions(state)
  const { page } = transactions
  return {
    user: getUser(state),
    transactions,
    page,
    transactionStatus: {
      add: getAddTransaction(state).status,
      delete: getDeleteTransaction(state).status
    }
  }
}

export default connect(mapStateToProps, {
  fetchTransactions,
  setTransactionsPage,
  resetTransaction
})(TransactionsContainer)
