const mongoose = require('mongoose')
const { MONGODB_URI } = require('../config')
const transactions = require('./transactions.json')

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

const Transactions = mongoose.model('transactions', transactionSchema)

const importData = async () => {
  try {
    await Transactions.create(transactions)
    console.log('Transactions were imported successfully')
    process.exit()
  } catch (e) {
    console.log(`Error importing transactions: ${e.message}`)
    process.exit()
  }
}

const deleteData = async () => {
  try {
    await Transactions.deleteMany()
    console.log('Transactions were deleted')
    process.exit()
  } catch (e) {
    console.log(`Error deleting transactions: ${e.message}`)
    process.exit()
  }
}

// connect to database
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log(`Connected to database at ${MONGODB_URI}`)
    if (process.argv[2] === '--import') {
      importData()
    } else if (process.argv[2] === '--delete') {
      deleteData()
    } else {
      console.log('Use either --import or --delete')
      process.exit()
    }
  })
  .catch(err => {
    console.error(err)
  })
