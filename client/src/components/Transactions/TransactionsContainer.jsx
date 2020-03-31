import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'

//Components
import TransactionsTable from './TransactionsTable'
import Spinner from '../Common/Spinner'

// Selectors
import { getUser } from '../../reducers/userReducer'

// Actions
import { fetchTransactions } from '../../actions/fetchTransactions'

// Selectors
import { getTransactions } from '../../reducers/transactionsReducer'

// utils
import { ASYNC_STATUS } from '../../utils/constants'
const { PENDING, SUCCESS, ERROR, UNINIT } = ASYNC_STATUS

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(5, 0)
  }
}))

const rowsPerPageOptions = [10, 25, 100]

const TransactionsContainer = ({ user, fetchTransactions, transactions }) => {
  const classes = useStyles()
  const [page, setPage] = useState({
    current: 0,
    rows: rowsPerPageOptions[0]
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
    console.log('transactions', transactions)
  }, [transactions])

  const handlePageChange = (event, newPage) => {
    setPage({
      ...page,
      current: newPage
    })
  }

  const handleRowsPerPageChange = event => {
    setPage({
      current: 0,
      rows: event.target.value
    })
  }

  return (
    <Container component="main" maxWidth="lg" className={classes.container}>
      <Typography variant="h5" component="h2">
        Transactions
      </Typography>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-end'
        }}
      >
        <Typography
          variant="subtitle2"
          component="span"
          style={{
            marginRight: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          Add a Transaction
        </Typography>
        <IconButton
          color="primary"
          style={{
            background: '#f1f1f1'
          }}
        >
          <AddIcon />
        </IconButton>
      </div>
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
    </Container>
  )
}

function mapStateToProps(state) {
  return {
    user: getUser(state),
    transactions: getTransactions(state)
  }
}

export default connect(mapStateToProps, {
  fetchTransactions
})(TransactionsContainer)
