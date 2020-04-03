import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

// utils
import {
  TRANS_ACTIONS
} from '../../../utils/constants'

const Actions = ({ transactionId, actionHandler }) => {
  return (
    <>
      <IconButton
        onClick={() => actionHandler(transactionId, TRANS_ACTIONS.UPDATE)}
        title="Edit"
        aria-label="Edit"
      >
        <EditIcon />
      </IconButton>
      <IconButton
        onClick={() => actionHandler(transactionId, TRANS_ACTIONS.DELETE)}
        title="Delete"
        aria-label="Delete"
      >
        <DeleteIcon />
      </IconButton>
    </>
  )
}

export default Actions
