import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex'
  },
  text: {
    marginRight: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  button: {
    background: '#3F51B5',
    padding: theme.spacing(1),
    '&:hover': {
      background: '#3F51B5'
    },
    '&:hover svg': {
      color: '#000000'
    }
  },
  addIcon: {
    color: '#FFFFFF'
  }
}))

const AddTransactionCTA = ({ handleCTAClick }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <IconButton className={classes.button} onClick={handleCTAClick}>
        <AddIcon className={classes.addIcon} />
      </IconButton>
      <Typography variant="subtitle2" component="span" className={classes.text}>
        Add a Transaction
      </Typography>
    </div>
  )
}

export default AddTransactionCTA
