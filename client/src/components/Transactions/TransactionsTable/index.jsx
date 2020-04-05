import React from 'react'
import format from 'date-fns/format'
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
  },
  tableHead: {
    backgroundColor: '#3F51B5'
  }
}))

const columns = [
  {
    id: 'date',
    label: 'Date',
    minWidth: 20,
    maxWidth: 60,
    format: value => format(new Date(value), 'yyyy-MM-dd')
  },
  { id: 'type', label: 'Type', align: 'center', minWidth: 50, maxWidth: 60 },
  {
    id: 'amount',
    label: 'Amount',
    minWidth: 20,
    maxWidth: 150,
    align: 'center',
    format: value => value.toFixed(2)
  },
  {
    id: 'description',
    label: 'Description',
    minWidth: 20,
    maxWidth: 200
  },
  {
    id: 'actions',
    label: 'Actions',
    align: 'center',
    minWidth: 20,
    maxWidth: 70
  }
]

const TransactionsTable = ({
  transactions,
  count,
  rowsPerPage,
  rowsPerPageOptions,
  page,
  handlePageChange,
  handleRowsPerPageChange,
  handleTableIconClick
}) => {
  const classes = useStyles()

  // Map actions to each transaction
  const mappedRows = transactions.map(transaction => {
    return {
      ...transaction,
      actions: [<Actions key={transaction.id} transactionId={transaction.id} actionHandler={handleTableIconClick} />]
    }
  })

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.tableContainer}>
        <Table aria-label="table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              {columns.map(({ id, label, align, maxWidth, minWidth }) => {
                return (
                  <TableCell
                    key={id}
                    align={align}
                    style={{
                      minWidth,
                      maxWidth,
                      color: '#FFF'
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
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleRowsPerPageChange}
      />
    </Paper>
  )
}

export default TransactionsTable
