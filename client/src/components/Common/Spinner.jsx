import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: props => theme.spacing(props.verticalPadding, props.horizontalPadding)
  },
}))

const Spinner = ({ verticalPadding, horizontalPadding }) => {
  const classes = useStyles({verticalPadding, horizontalPadding})
  return (
    <div className={classes.container}>
      <CircularProgress />
    </div>
  )
}

Spinner.defaultProps = {
  verticalPadding: 0,
  horizontalPadding: 0
}

export default Spinner
