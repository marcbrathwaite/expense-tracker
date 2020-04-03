import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

const Alert = ({
  isOpen,
  handleAlertClose,
  severity,
  message
}) => {
  return (
    <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleAlertClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleAlertClose}
          severity={severity}
        >
          {message}
        </MuiAlert>
      </Snackbar>
  )
}

export default Alert
