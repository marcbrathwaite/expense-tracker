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
import AddTransaction from './AddTransaction'
import Alert from './Alert'

// Selectors
import { getUser } from '../../reducers/userReducer'

// Actions
import { fetchTransactions, setTransactionsPage } from '../../actions'

// Selectors
import { getTransactions } from '../../reducers/transactionsReducer'
import { getAddTransaction } from '../../reducers/transactionReducer'

// utils
import {
  ASYNC_STATUS,
  ROWS_PER_PAGE,
  TRANS_ACTIONS
} from '../../utils/constants'

const { PENDING, UNINIT, SUCCESS, ERROR } = ASYNC_STATUS
const { ADD } = TRANS_ACTIONS

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
  addTransactionStatus
}) => {
  const classes = useStyles()

  const [showModal, setShowModal] = useState(false)
  // state of alert for Adding, deleteing and updating transaction
  const [alert, setAlert] = useState({
    open: false,
    level: null,
    message: null
  })

  useEffect(() => {
    if (user.data !== false) {
      fetchTransactions({
        page: page.current + 1,
        limit: page.rows
      })
    }
  }, [user, fetchTransactions, page])

  useEffect(() => {
    if ([SUCCESS, ERROR].includes(addTransactionStatus)) {
      setShowModal(false)
      setAlert({
        open: true,
        level: alertLevel[addTransactionStatus],
        message: alertMessaging[ADD][addTransactionStatus]
      })
    }
  }, [addTransactionStatus, showModal, setAlert])

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

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleAlertClose = () => {
    setAlert(false)
  }

  return (
    <Container component="main" maxWidth="lg" className={classes.container}>
      <Typography variant="h5" component="h2">
        Transactions
      </Typography>
      <AddTransactionCTA handleCTAClick={handleShowModal} />
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
        />
      )}
      <Modal isOpen={showModal} style={modalStyles}>
        <AddTransaction handleCancel={handleCloseModal} />
      </Modal>

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
    addTransactionStatus: getAddTransaction(state).status
  }
}

export default connect(mapStateToProps, {
  fetchTransactions,
  setTransactionsPage
})(TransactionsContainer)
