export const SET_TRANSACTIONS_PAGE = 'SET_TRANSACTIONS_PAGE'

export const setTransactionsPage = ({ current, rows }) => {
  return {
    type: SET_TRANSACTIONS_PAGE,
    payload: {
      current,
      rows
    }
  }
}
