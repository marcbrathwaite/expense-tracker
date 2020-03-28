import React from 'react'
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'

// FIXME: move somewhere else?
const TRANSACTION_TYPES = ['expense', 'income']

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(2)
  }
}))

const AddTransaction = ({
  handleDateChange,
  handleInputChange,
  handleSubmit,
  formInputs,
  dateInput
}) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form>
          <Grid container justify="space-around">
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
              id={formInputs.type.name}
              name={formInputs.type.name}
              select
              label="Type"
              value={formInputs.type.value}
              onChange={handleInputChange}
              helperText="Please select transaction type"
            >
              {TRANSACTION_TYPES.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              error={formInputs.amount.error}
              variant="outlined"
              id={formInputs.amount.name}
              name={formInputs.amount.name}
              label="Amount"
              value={formInputs.amount.value}
              onChange={handleInputChange}
              helperText="Please enter amount"
            />
          </Grid>
          <Grid container justify="center">
            <TextField
              variant="outlined"
              id={formInputs.description.name}
              name={formInputs.description.name}
              label="Description"
              value={formInputs.description.value}
              onChange={handleInputChange}
              helperText="Transaction Description"
            />
          </Grid>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            onClick={handleSubmit}
          >
            Add Transaction
          </Button>
        </form>
      </MuiPickersUtilsProvider>
    </Card>
  )
}

export default AddTransaction
