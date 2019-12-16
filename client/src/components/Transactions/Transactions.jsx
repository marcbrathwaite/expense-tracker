import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'

// Components
import TransactionsTable from './TransactionsTable'
import AddTransaction from './AddTransaction'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(5, 0)
  }
}))

const Transactions = () => {
  const classes = useStyles()
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
      <AddTransaction />
      <TransactionsTable />
    </Container>
  )
}

export default Transactions
