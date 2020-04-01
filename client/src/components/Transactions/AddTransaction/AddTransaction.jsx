import React from 'react'
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'

const TRANSACTION_TYPES = ['expense', 'income']

const useStyles = makeStyles(theme => ({
  container: {
    width: '500px'
  },
  row: {
    margin: theme.spacing(0,0,3,0)
  }
}))

const AddTransaction = ({
  handleDateChange,
  handleInputChange,
  handleSubmit,
  formInputs,
  dateInput,
  handleCancel,
  handleOnBlur
}) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form>
          <Grid container justify="space-between" alignItems="center" className={classes.row}>
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
          <Grid container justify="space-between" alignItems="center" className={classes.row}>
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
              helperText="Must be a positive number"
            />
            <TextField
              variant="outlined"
              id={formInputs.description.name}
              name={formInputs.description.name}
              label="Description"
              value={formInputs.description.value}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid container justify="space-around" alignItems="center">
            <Button
              type="submit"
              color="primary"
              variant="contained"
              onClick={handleSubmit}
            >
              Add Transaction
            </Button>
            <Button
              type="submit"
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
