import React, { useState } from 'react'
import { connect } from 'react-redux'
import { format } from 'date-fns'

// Components
import AddTransaction from './AddTransaction'

// Selectors
import { getTransaction } from '../../../reducers/transactionReducer'

// Actions
import { addTransaction } from '../../../actions'

// utils
import { isNotEmpty, isPositiveNumber } from '../../../utils'

const AddTransactionContainer = ({ addTransaction }) => {
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

  function handleSubmit(e) {
    e.preventDefault()
    const formatedDate = format(dateInput, 'yyyy-MM-dd')
    const transaction = {
      date: formatedDate,
      type: formInputs.type.value,
      amount: formInputs.amount.value,
      description: formInputs.description.value
    }
    addTransaction(transaction)
  }

  return (
    <AddTransaction
      handleDateChange={handleDateChange}
      handleInputChange={handleInputChange}
      formInputs={formInputs}
      dateInput={dateInput}
      handleSubmit={handleSubmit}
    />
  )
}

function mapStateToProps(state) {
  return {
    transaction: getTransaction(state)
  }
}

export default connect(mapStateToProps, { addTransaction })(
  AddTransactionContainer
)
