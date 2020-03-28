import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'

// Components
import TransactionRow from './TransactionRow'
import Actions from './Actions'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  tableContainer: {
    maxHeight: 440
  }
}))

function generateRows(numOfRows, row) {
  const rows = []
  for (let i = 1; i <= numOfRows; i += 1) {
    rows.push({ ...row, id: `${row.id}-${i}` })
  }

  return rows
}

const TransactionsTable = () => {
  const classes = useStyles()
  const columns = [
    { id: 'date', label: 'Date', minWidth: 50, maxWidth: 60 },
    { id: 'type', label: 'Type', align: 'center', minWidth: 50, maxWidth: 60 },
    {
      id: 'amount',
      label: 'Amount',
      minWidth: 30,
      maxWidth: 150,
      align: 'center',
      format: value => value.toFixed(2)
    },
    {
      id: 'description',
      label: 'Description',
      minWidth: 100,
      maxWidth: 200
    },
    {
      id: 'actions',
      label: 'Actions',
      align: 'center',
      minWidth: 50,
      maxWidth: 70
    }
  ]

  const rows = generateRows(15, {
    id: '374y3t843y4783y4',
    date: '2019-12-31',
    type: 'expense',
    amount: 3456.45,
    description: 'Went to the supermarket and bout 4 pigs and 3 cows'
  })
  // Map actions to each transaction
  const mappedRows = rows.map(row => {
    return {
      ...row,
      actions: [<Actions key={row.id} transactionId={row.id} />]
    }
  })

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.tableContainer}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(({ id, label, align, maxWidth, minWidth }) => {
                return (
                  <TableCell
                    key={id}
                    align={align}
                    style={{
                      minWidth,
                      maxWidth
                    }}
                  >
                    {label}
                  </TableCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {mappedRows.map(row => {
              return (
                <TransactionRow
                  key={row.id}
                  columns={columns}
                  transactionData={row}
                />
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={25}
        rowsPerPage={10}
        page={2}
        onChangePage={() => console.log('test')}
        onChangeRowsPerPage={() => console.log('test')}
      />
    </Paper>
  )
}

export default TransactionsTable
