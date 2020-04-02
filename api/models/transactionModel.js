const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({
  date: {
    type: Date,
    required: [true, 'Please enter a transaction date']
  },
  type: {
    type: String,
    required: [true, 'Please enter a transaction type'],
    enum: ['expense', 'income'],
    lowercase: true
  },
  amount: {
    type: Number,
    required: [true, 'Please enter a transacton amount']
  },
  description: {
    type: String,
    default: ''
  },
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }
})

// pre save hooks
transactionSchema.pre('save', function(next) {
  this.amount = parseFloat(this.amount)
  next()
})

transactionSchema.pre('findByIdAndUpdate', function(next) {
  if (this.isModified('amount')) {
    this.amount = parseFloat(this.amount)
  }
  next()
})

// instance methods
transactionSchema.methods.serialize = function() {
  const self = this
  const { _id: id, date, type, amount, description } = self
  return { id, date, type, amount, description }
}

exports.Transaction = mongoose.model('transactions', transactionSchema)
