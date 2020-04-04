import React from 'react'

// Components
import TransactionForm from '../TransactionForm'

// Hooks
import useTransactionForm from '../../../../hooks/useTransactionForm'


const AddTransaction = ({ handleAdd, handleCancel, status }) => {
  const {
    dateInput,
    formInputs,
    isPending,
    handleDateChange,
    handleInputChange,
    handleOnBlur,
    handleSubmit
  } = useTransactionForm(handleAdd, status)

  return (
    <TransactionForm
      handleDateChange={handleDateChange}
      handleInputChange={handleInputChange}
      handleOnBlur={handleOnBlur}
      formInputs={formInputs}
      dateInput={dateInput}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
      isSubmitPending={isPending}
      submitBtnText="Add Transaction"
    />
  )
}

export default AddTransaction

