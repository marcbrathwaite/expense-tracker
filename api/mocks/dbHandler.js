const dateGenerator = require('random-date-generator')
const random = require('random')
const mongoose = require('mongoose')
const { MONGODB_URI } = require('../config')

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

const generateTransactions = (numOfTrans, userId) => {
  const transactions = []
  const startDate = new Date(2019, 1, 1)
  const endDate = new Date(2020, 3, 30)
  const types = ['income', 'expense']
  for (let i = 0; i <= numOfTrans; i++) {
    const date = dateGenerator.getRandomDateInRange(startDate, endDate)
    const dateFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' })
    const [{ value: mo},,{ value: dy},, {value: yr}] = dateFormat.formatToParts(date)
    transactions.push({
      date: `${yr}-${mo}-${dy}`,
      type: types[random.int(0, 1)],
      amount: random.float(1, 100).toFixed(2) * 1,
      description: 'Test Data',
      _user: userId
    })
  }
  return transactions
}

const importData = async transactions => {
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
      const transactions = generateTransactions(500, '5e7b7b43ff53d8187af0342c')
      importData(transactions)
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
