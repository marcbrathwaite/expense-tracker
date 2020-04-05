import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const SummaryRow = ({ columns, summaryData }) => {
  return (
    <TableRow>
      {
        columns.map(({ id, align, maxWidth, minWidth, format, isHeader }) => {
          const value = format !== undefined ? format(summaryData[id]) : summaryData[id]
          return (
            <TableCell
              key={id}
              align={align}
              style={{
                minWidth,
                maxWidth,
                backgroundColor: isHeader ? '#000' : '#FFF',
                color: isHeader ? '#FFF' : '#000'
              }}
            >
              {value}
            </TableCell>
          )
        })
      }
    </TableRow>
  )
}

export default SummaryRow