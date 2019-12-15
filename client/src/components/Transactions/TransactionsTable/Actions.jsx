import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

const Actions = ({ transactionId, handleDelete, handleEdit }) => {
  return (
    <>
      <IconButton onClick={() => console.log(`Edit ${transactionId}`)}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => console.log(`Delete ${transactionId}`)}>
        <DeleteIcon />
      </IconButton>
    </>
  )
}

export default Actions
