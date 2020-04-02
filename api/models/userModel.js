const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const TokenManager = require('../utils/TokenManager')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  name: {
    type: String,
    require: [true, 'Please tell us your name']
  },
  photo: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  password: {
    type: String,
    minlength: 8,
    require: [true, 'Please enter a password'],
    select: false // Do not send password by default
  },
  passwordConfirm: {
    type: String,
    require: [true, 'Please confirm password'],
    validate: {
      // This only works on create and save
      validator: function(el) {
        // true is this element(passwordConfirm) equal to password
        return el === this.password
      },
      message: 'Passwords are not the same'
    }
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
})

// pre save hook for encrypting password
userSchema.pre('save', async function(next) {
  // if password is not modified go to next middleware e.g. only changing email
  if (!this.isModified('password')) return next()
  // hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12)

  // delete passwordconfirm field
  this.passwordConfirm = undefined
  next()
})

// Document middleware
// presave hook for adding passwordChangedAt field
userSchema.pre('save', function (next) {
  // this keyword points to current document
  // if the password has not changed or the document is new
  if (!this.isModified('password') || this.isNew) return next()

  // substract 1 second to endsure the password changed at date is before the date on the web token
  this.passwordChangedAt = Date.now() - 1000
  next()
})

// Query middleware
// prefind hook to only look for documents with active set to true
userSchema.pre(/^find/, function(next) {
  // this points to the current query
  this.find({ active: { $ne: false } }) // active not equal to false
  next()
})

// instance methods

// compare whether the password sent by the user, is the same as the password saved in the database
userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword)
}

// check if password has been changed after token issue
userSchema.methods.changePasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    )
    return changedTimestamp > JWTTimestamp
  }
  return false
}

// return the params we want to send to to UI
userSchema.methods.serialize = function() {
  const self = this
  const { email, name, role, _id: id } = self
  return { id, email, name, role }
}

// create reset password token to be sent to user on reset password request
userSchema.methods.createPasswordResetToken = function() {
  // create reset token
  const resetToken = TokenManager.createPasswordResetToken()
  // hash the reset token and set it on the instance
  this.passwordResetToken = TokenManager.hashPasswordResetToken(resetToken)

  // Expires 10 mins (in ms) from now
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000
  // We will send the unencrypted token via email
  return resetToken
}
// Takes name of model and schema
exports.User = mongoose.model('users', userSchema)
