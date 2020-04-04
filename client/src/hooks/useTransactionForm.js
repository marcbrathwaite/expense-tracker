import { useState } from 'react'
import { format } from 'date-fns'

// utils
import { isNotEmpty, isValidCurrency } from '../utils'
import { ASYNC_STATUS } from '../utils/constants'

const { PENDING } = ASYNC_STATUS


const useTransactionForm = (
  submitAction,
  submitActionStatus,
  { 
    date = Date.now(),
    type = 'expense',
    amount = '',
    description = ''
  } = {}
) => {
  const [dateInput, setDateInput] = useState(date)
  const [formInputs, setFormInputs] = useState({
    type: {
      name: 'type',
      value: type,
      validation: isNotEmpty
    },
    amount: {
      name: 'amount',
      value: amount,
      validation: isValidCurrency,
      error: false
    },
    description: {
      name: 'description',
      value: description
    }
  })

  const isPending = submitActionStatus === PENDING
  
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
      submitAction(transaction)
    }
  }

  return {
    dateInput,
    formInputs,
    isPending,
    handleDateChange,
    handleInputChange,
    handleOnBlur,
    handleSubmit
  }
}

export default useTransactionForm