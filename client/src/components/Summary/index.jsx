import React from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'

// Components
import SummaryRow from './SummaryRow'
import Spinner from '../Common/Spinner'

// Selectors
import { getTransactionsSummary } from '../../reducers/transactionsReducer'

const columns = [
  {
    id: 'type',
    align: 'left',
    minWidth: 15,
    maxWidth: 20,
    isHeader: true
  },
  {
    id: 'value',
    align: 'center',
    minWidth: 20,
    maxWidth: 30,
    isHeader: false,
    format: value => value.toFixed(2)
  }
]

const Summary = ({ summary }) => {

  if (['UNINIT', 'PENDING'].includes(summary.status)) {
    return <Spinner />
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {
            summary.data.map((row) => {
              return (
                <SummaryRow
                  key={row.type}
                  columns={columns}
                  summaryData={row}
                />
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const mapStateToProps = state => {
  return {
    summary: getTransactionsSummary(state)
  }
}

export default connect(mapStateToProps)(Summary)
