import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Modal from 'react-modal'

//Components
import TransactionsTable from './TransactionsTable'
import Summary from '../Summary'
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
  getDeleteTransaction,
  getUpdateTransaction
} from '../../reducers/transactionReducer'

// utils
import {
  ASYNC_STATUS,
  ROWS_PER_PAGE,
  TRANS_ACTIONS,
  ALERT_LEVEL,
  ALERT_MESSAGING
} from '../../utils/constants'

const { PENDING, UNINIT, SUCCESS, ERROR } = ASYNC_STATUS
const { ADD, UPDATE, DELETE } = TRANS_ACTIONS

Modal.setAppElement('#root')

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(5, 0)
  },
  summaryContainer: {
    margin: theme.spacing(0, 0, 6, 0)
  },
  title: {
    margin: theme.spacing(0, 0, 2, 0),
    textDecoration: 'underline'
  },
  summaryContentWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  summary: {
    minWidth: 320,
    width: '30%'
  },
  ctaWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: theme.spacing(0, 0, 2, 0)
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
    } else if (Object.values(transactionStatus).some(val => val === ERROR)) {
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
        level: ALERT_LEVEL[transactionStatus.add],
        message: ALERT_MESSAGING[ADD][transactionStatus.add]
      })
    } else if ([SUCCESS, ERROR].includes(transactionStatus.delete)) {
      setShowModal(null)
      // Set Alert state, so that alert would be show
      setAlert({
        open: true,
        level: ALERT_LEVEL[transactionStatus.delete],
        message: ALERT_MESSAGING[DELETE][transactionStatus.delete]
      })
    } else if ([SUCCESS, ERROR].includes(transactionStatus.update)) {
      setShowModal(null)
      // Set Alert state, so that alert would be show
      setAlert({
        open: true,
        level: ALERT_LEVEL[transactionStatus.update],
        message: ALERT_MESSAGING[UPDATE][transactionStatus.update]
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

  const handleCloseModal = () => setShowModal(null)

  const handleAlertClose = () => setAlert(false)

  const handleTableIconClick = (id, action) => {
    setTransactionId(id)
    setShowModal(action)
  }

  // boolean for determining whether to open modal
  const isModalOpen = [ADD, UPDATE, DELETE].includes(showModal)

  return (
    <Container component="main" maxWidth="lg" className={classes.container}>
      {[UNINIT, PENDING].includes(transactions.status) ? (
        <Spinner />
      ) : (
        <>
          <div className={classes.summaryContainer}>
            <Typography
              variant="h5"
              component="h2"
              className={classes.title}
            >
              Summary
            </Typography>
            <div className={classes.summaryContentWrapper}>
              <div className={classes.summary}>
                <Summary />
              </div>
            </div>
          </div>
          <Typography variant="h5" component="h2" className={classes.title}>
              Transactions
          </Typography>
            <div className={classes.ctaWrapper}>
              <AddTransactionCTA handleCTAClick={() => setShowModal(ADD)} /> 
            </div>
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
        </>
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
      delete: getDeleteTransaction(state).status,
      update: getUpdateTransaction(state).status
    }
  }
}

export default connect(mapStateToProps, {
  fetchTransactions,
  setTransactionsPage,
  resetTransaction
})(TransactionsContainer)
