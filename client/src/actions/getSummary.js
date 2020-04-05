import { TransactionManager } from '../managers'

import { ASYNC_STATUS } from '../utils/constants'

const { PENDING, SUCCESS, ERROR } = ASYNC_STATUS

export const GET_SUMMARY = 'GET_SUMMARY'

export const getSummary = () => {
  return async dispatch => {
    try {
      dispatch({
        type: `${GET_SUMMARY}_${PENDING}`
      })

      const summary = await TransactionManager.sharedInstance.getSummary()
      dispatch({
        type: `${GET_SUMMARY}_${SUCCESS}`,
        payload: summary
      })
    } catch {
      dispatch({
        type: `${GET_SUMMARY}_${ERROR}`
      })
    }
  }
}
