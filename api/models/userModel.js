import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'

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
  googleId: {
    type: String
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
    select: false // Do not send password by default
  },
  passwordConfirm: {
    type: String,
    validate: {
      // This only works on create and save
      validator: function(el) {
        // true is this element(passwordConfirm) equal to password
        return el === this.password
      },
      message: 'Passwords are not the same'
    }
  },
  passwordChangedAt: Date
})

// pre save hook
userSchema.pre('save', async function(next) {
  // if password is not modified go to next middleware
  if (!this.isModified('password')) return next()
  // hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12)

  // delete passwordconfirm field
  this.passwordConfirm = undefined
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

//
userSchema.methods.serialize = function serialize() {
  const self = this
  const { email, name, role, _id: id } = self
  return { id, email, name, role }
}

export const User = mongoose.model('users', userSchema)
