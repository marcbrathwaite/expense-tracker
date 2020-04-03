import React from 'react'
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'

const TRANSACTION_TYPES = ['expense', 'income']

const useStyles = makeStyles(theme => ({
  container: {
    width: '500px'
  },
  row: {
    margin: theme.spacing(0, 0, 3, 0)
  },
  buttonWrapper: {
    position: 'relative'
  },
  circularProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
}))

const AddTransaction = ({
  handleDateChange,
  handleInputChange,
  handleSubmit,
  formInputs,
  dateInput,
  handleCancel,
  handleOnBlur,
  addTransactionPending
}) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            className={classes.row}
          >
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="yyyy/MM/dd"
              margin="normal"
              id="date"
              label="Date"
              value={dateInput}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />

            <TextField
              error={formInputs.type.error}
              variant="outlined"
              required
              id={formInputs.type.name}
              name={formInputs.type.name}
              select
              label="Type"
              value={formInputs.type.value}
              onChange={handleInputChange}
            >
              {TRANSACTION_TYPES.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            className={classes.row}
          >
            <TextField
              error={formInputs.amount.error}
              variant="outlined"
              id={formInputs.amount.name}
              name={formInputs.amount.name}
              required
              label="Amount"
              value={formInputs.amount.value}
              onChange={handleInputChange}
              onBlur={handleOnBlur}
              helperText="Enter valid dollar amount"
            />
            <TextField
              variant="outlined"
              id={formInputs.description.name}
              name={formInputs.description.name}
              label="Description"
              value={formInputs.description.value}
              onChange={handleInputChange}
              helperText="Enter transaction description"
            />
          </Grid>
          <Grid container justify="space-around" alignItems="center">
            <div className={classes.buttonWrapper}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={addTransactionPending}
                onClick={handleSubmit}
              >
                Add Transaction
              </Button>
              {addTransactionPending && (
                <CircularProgress
                  size={24}
                  className={classes.circularProgress}
                />
              )}
            </div>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Grid>
        </form>
      </MuiPickersUtilsProvider>
    </div>
  )
}

export default AddTransaction
