import React, { useState } from 'react'
import 'date-fns'

// Components
import AddTransaction from './AddTransaction'

// utils
import { isNotEmpty, isPositiveNumber } from '../../../utils'

const AddTransactionContainer = () => {
  const [dateInput, setDateInput] = useState(new Date('2019-12-16'))
  const [formInputs, setFormInputs] = useState({
    type: {
      name: 'type',
      value: 'expense',
      validation: isNotEmpty
    },
    amount: {
      name: 'amount',
      value: '',
      validation: isPositiveNumber,
      error: false
    },
    description: {
      name: 'description',
      value: ''
    }
  })

  function handleDateChange(date) {
    setDateInput(date)
  }

  function handleInputChange(e) {
    const { name, value } = e.target
    // get current state of input field
    const currentInputState = formInputs[name]
    setFormInputs({
      ...formInputs,
      [name]: {
        ...currentInputState,
        value
      }
    })
  }

  return (
    <AddTransaction
      handleDateChange={handleDateChange}
      handleInputChange={handleInputChange}
      formInputs={formInputs}
      dateInput={dateInput}
    />
  )
}

export default AddTransactionContainer
