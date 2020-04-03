import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'

// utils
import { ASYNC_STATUS } from '../../../../utils/constants'

const { PENDING } = ASYNC_STATUS

const useStyles = makeStyles(theme => ({
  text: {
    margin: theme.spacing(0,0,4,0)
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  circularProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  },
  submitWrapper: {
    position: 'relative',
    marginRight: theme.spacing(2)
  }
}))

const DeleteTransaction = ({ handleDelete, handleCancel, status }) => {
  const classes = useStyles()
  const isPending = status === PENDING
  return (
    <>
      <Typography
        variant="subtitle2"
        component="p"
        align="center"
        className={classes.text}
      >
        Are you sure you want to delete this transaction?
      </Typography>
      <div className={classes.buttonContainer}>
        <div className={classes.submitWrapper}>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            disabled={isPending}
            onClick={handleDelete}
          >
            Delete Transaction
          </Button>
          {isPending && (
            <CircularProgress size={24} className={classes.circularProgress} />
          )}
        </div>
        <Button color="secondary" variant="contained" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </>
  )
}

export default DeleteTransaction
