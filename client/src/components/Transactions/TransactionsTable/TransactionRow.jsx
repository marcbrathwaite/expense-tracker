import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const TransactionRow = ({ columns, transactionData }) => {
  return (
    <TableRow>
      {columns.map(({ id, align, maxWidth, minWidth, format }) => {
        // Check if field should be formatted
        const value =
          format !== undefined
            ? format(transactionData[id])
            : transactionData[id]
        return (
          <TableCell
            key={id}
            align={align}
            style={{
              minWidth,
              maxWidth
            }}
          >
            {value}
          </TableCell>
        )
      })}
    </TableRow>
  )
}

export default TransactionRow
