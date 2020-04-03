import React, { useState } from 'react'
import { connect } from 'react-redux'
import { format } from 'date-fns'

// Components
import AddTransaction from './AddTransaction'

// Actions
import { addTransaction } from '../../../actions'

// Selectors
import { getAddTransaction } from '../../../reducers/transactionReducer' 

// utils
import { isNotEmpty, isValidCurrency } from '../../../utils'
import { ASYNC_STATUS } from '../../../utils/constants'

const { PENDING } = ASYNC_STATUS

const AddTransactionContainer = ({ addTransaction, handleCancel, addStatus }) => {
  const [dateInput, setDateInput] = useState(Date.now())
  const [formInputs, setFormInputs] = useState({
    type: {
      name: 'type',
      value: 'expense',
      validation: isNotEmpty
    },
    amount: {
      name: 'amount',
      value: '',
      validation: isValidCurrency,
      error: false
    },
    description: {
      name: 'description',
      value: ''
    }
  })

  // pending status of addTransaction action
  const addTransactionPending = addStatus === PENDING

  const handleDateChange = date => {
    setDateInput(date)
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    // get current state of input field
    const currentInputState = formInputs[name]
    // Check whether validation is required
    if (currentInputState.validation) {
      currentInputState.error = !currentInputState.validation(value)
    }
    setFormInputs({
      ...formInputs,
      [name]: {
        ...currentInputState,
        value
      }
    })
  }

  const handleOnBlur = e => {
    const { name, value } = e.target
    // get current state of input field
    const currentInputState = formInputs[name]
    if (currentInputState.validation) {
      currentInputState.error = !currentInputState.validation(value)
    }

    setFormInputs({
      ...formInputs,
      [name]: {
        ...currentInputState,
      }
    })

  }

  const handleSubmit = e => {
    e.preventDefault()
    let error = false
    // Check for error in formInputs
    Object.keys(formInputs).forEach(key => {
      if (formInputs[key].error && formInputs[key].error === true) {
        error = true
      }
    })
    if (!error) {
      const formatedDate = format(dateInput, 'yyyy-MM-dd\'T\'HH:mm:ss.SSSxxx')
      const transaction = {
        date: formatedDate,
        type: formInputs.type.value,
        amount: formInputs.amount.value,
        description: formInputs.description.value
      }
      addTransaction(transaction)
    }
  }

  return (
    <AddTransaction
      handleDateChange={handleDateChange}
      handleInputChange={handleInputChange}
      handleOnBlur={handleOnBlur}
      formInputs={formInputs}
      dateInput={dateInput}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
      addTransactionPending={addTransactionPending}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    addStatus: getAddTransaction(state).status
  }
}

export default connect(mapStateToProps, { addTransaction })(AddTransactionContainer)
