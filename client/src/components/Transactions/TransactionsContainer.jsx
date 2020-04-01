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

// Selectors
import { getUser } from '../../reducers/userReducer'

// Actions
import { fetchTransactions, setTransactionsPage } from '../../actions'

// Selectors
import { getTransactions } from '../../reducers/transactionsReducer'

// utils
import { ASYNC_STATUS } from '../../utils/constants'
const { PENDING, SUCCESS, ERROR, UNINIT } = ASYNC_STATUS

Modal.setAppElement('#root')

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(5, 0)
  }
}))

const rowsPerPageOptions = [10, 25, 100]

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
  page
}) => {
  const classes = useStyles()

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (user.data !== false) {
      fetchTransactions({
        page: page.current + 1,
        limit: page.rows
      })
    }
  }, [user, fetchTransactions, page])

  useEffect(() => {
    console.log('transactions', transactions)
  }, [transactions])

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
          rowsPerPageOptions={rowsPerPageOptions}
          page={page.current}
          handlePageChange={handlePageChange}
          handleRowsPerPageChange={handleRowsPerPageChange}
        />
      )}
      <Modal isOpen={showModal} style={modalStyles}>
        <AddTransaction handleCancel={handleCloseModal} />
      </Modal>
    </Container>
  )
}

function mapStateToProps(state) {
  const transactions = getTransactions(state)
  const { page } = transactions
  return {
    user: getUser(state),
    transactions,
    page
  }
}

export default connect(mapStateToProps, {
  fetchTransactions,
  setTransactionsPage
})(TransactionsContainer)
