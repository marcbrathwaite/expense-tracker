import React from 'react'

// Components
import TransactionForm from '../TransactionForm'

// Hooks
import useTransactionForm from '../../../../hooks/useTransactionForm'


const UpdateTransaction = ({
  handleUpdate,
  handleCancel,
  status,
  transactionToUpdate
}) => {
  
  const onUpdate = (updatedTransaction) => {
    handleUpdate(transactionToUpdate.id, updatedTransaction)
  }
  const {
    dateInput,
    formInputs,
    isPending,
    handleDateChange,
    handleInputChange,
    handleOnBlur,
    handleSubmit
  } = useTransactionForm(onUpdate, status, transactionToUpdate)

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
      submitBtnText="Update Transaction"
    />
  )
}

export default UpdateTransaction
