// statuses of network requests
export const ASYNC_STATUS = {
  UNINIT: 'UNINIT',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}

// Rows per page options for transactions table
export const ROWS_PER_PAGE = [10, 25, 100]

// Actions for transactions
export const TRANS_ACTIONS = {
  ADD: 'ADD',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
}

export const ALERT_LEVEL = {
  SUCCESS: 'success',
  ERROR: 'error'
}

export const ALERT_MESSAGING = {
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
