// Models
const { User } = require('../models')
// Services
const { EmailService } = require('../services')
//Managers
const { BaseManager } = require('./BaseManager')
//Errors
const { AppError } = require('../errors')
// utils
const TokenManager = require('../utils/TokenManager')
const logger = require('../utils/logger')

// Constants
const { BACKEND_BASEURL } = require('../config')

exports.UserManager = class UserManager extends BaseManager {
  constructor() {
    super()
    const instance = this.constructor.instance
    if (instance) {
      return instance
    }
    this.constructor.instance = this

    // Assign User model
    this._user = User
  }
  // shared instance of UserManager
  static get shareInstance() {
    if (this._sharedInstance === undefined) {
      this._sharedInstance = new UserManager()
    }
    return this._sharedInstance
  }

  async signUp(user) {
    try {
      const newUser = await new this._user(user).save()
      logger.info(
        '[UserManager - signUp] Successfully added user to the database'
      )
      // Create token
      const token = TokenManager.signJWTToken(newUser._id)
      logger.info('[UserManager - signUp] JWT created')
      return {
        token,
        user: newUser.serialize()
      }
    } catch (e) {
      logger.error(`[UserManager - signUp] Unable to signup user: ${e.message}`)
      throw UserManager.parseError(e, 'User')
    }
  }

  async login(user) {
    try {
      // Check if user exists and password is correct
      const existingUser = await this._user
        .findOne({
          email: user.email
        })
        .select('+password') // make sure we get the password although we specified in the model that it wont be sent by default
      logger.info('[UserManager - login] get User from database')

      if (
        !existingUser ||
        !(await existingUser.correctPassword(
          user.password,
          existingUser.password
        ))
      ) {
        logger.error('[UserManager - login] Incorrect email or password')
        throw new AppError('Incorrect email or password', 401)
      }
      // if everything is ok , respond with token
      const token = TokenManager.signJWTToken(existingUser._id)

      return {
        token,
        user: existingUser.serialize()
      }
    } catch (e) {
      logger.error(`[UserManager - login] Login failure: ${e.message}`)
      throw UserManager.parseError(e, 'User')
    }
  }

  async forgotPassword(email, urlConfig) {
    try {
      // Get user based on POSTed email
      const user = await this._user.findOne({ email })

      if (!user) {
        logger.error(`[UserManager - forgotPassword] User not found`)
        throw new AppError('User not found', 404)
      }

      // Generate random reset token
      const resetToken = user.createPasswordResetToken()
      // would Need to set the validateBeforeSave option to false if we were goinmg to save the user without a required field e.g. email and password or a field which doesnt match validation
      await user.save({ validateBeforeSave: false })

      // Send to users email
      const { host, protocol } = urlConfig
      const resetURL = `${protocol}://${host}/reset-password/${resetToken}`

      const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to ${resetURL}\nIf you didn't forget your password, please ignore this email`

      try {
        await EmailService.shareInstance.sendEmail({
          email: user.email,
          subject: 'Your password reset token is valid for 10mins',
          message
        })
      } catch (e) {
        // reset the passwordResetToken
        user.passwordResetToken = undefined
        user.passwordResetExpires = undefined
        await user.save({ validateBeforeSave: false })
        logger.error(
          `[UserManager - forgotPassword] email failed: ${e.message}`
        )
        throw new AppError('Internal Server Failure', 500)
      }
    } catch (e) {
      logger.error(
        `[UserManager - forgotPassword] Forgot Password failure: ${e.message}`
      )
      throw UserManager.parseError(e, 'User')
    }
  }

  async resetPassword(token, password, passwordConfirm) {
    try {
      // hash resettoken
      const hashedToken = TokenManager.hashPasswordResetToken(token)
      // get user based on hased token and checking if expire date is greater than now
      const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() }
      })

      // if token has not expired, and there is user, set new password
      if (!user) {
        logger.error(
          '[UserManager - resetPassword] Token is invalid or has expired'
        )
        throw new AppError('Password Reset Token invalid or expired', 400)
      }

      user.password = password
      user.passwordConfirm = passwordConfirm
      user.passwordResetToken = undefined
      user.passwordResetExpires = undefined
      await user.save()

      // Log the user in, send JWT to client
      const jwtToken = TokenManager.signJWTToken(user._id)

      return {
        token: jwtToken,
        user: user.serialize()
      }
    } catch (e) {
      logger.error(
        `[UserManager - resetPassword] Reset Password failure: ${e.message}`
      )
      throw UserManager.parseError(e, 'User')
    }
  }

  async updatePassword(id, oldpassword, newPassword, newPasswordConfirm) {
    try {
      // get user from collection and specify we also want password to come
      const user = await this._user.findById(id).select('+password')
      // check if Posted current password is correct
      if (!(await user.correctPassword(oldpassword, user.password))) {
        logger.error('[UserManager - updatePassword] Password no not match')
        throw new AppError('Incorrect Password', 400)
      }

      user.password = newPassword
      user.passwordConfirm = newPasswordConfirm
      await user.save()

      // Log the user in, send JWT to client
      const jwtToken = TokenManager.signJWTToken(user._id)

      return {
        token: jwtToken,
        user: user.serialize()
      }
    } catch (e) {
      logger.error(
        `[UserManager - updatePassword] Update Password failure: ${e.message}`
      )
      throw UserManager.parseError(e, 'User')
    }
  }

  async updateUserInfo(id, newUserInfo) {
    try {
      // we can use this method because password is not being changed which requires the presave and with save validation is done onthe entire doc
      // Update user document
      const updatedUser = await this._user.findOneAndUpdate(
        { _id: id },
        newUserInfo,
        {
          new: true, // return updated info
          runValidators: true
        }
      )

      return updatedUser.serialize()
    } catch (e) {
      logger.error(
        `[UserManager - updateUserInfo] Update User Info failure failure: ${e.message}`
      )
      throw UserManager.parseError(e, 'User')
    }
  }

  async deactivateUser(id) {
    try {
      await this._user.findByIdAndUpdate(id, { active: false })
    } catch (e) {
      logger.error(
        `[UserManager - deactivateUse] Deactivate User failure: ${e.message}`
      )
      throw UserManager.parseError(e, 'User')
    }
  }

  async getUser(id) {
    try {
      return this._user.findById(id)
    } catch (e) {
      logger.error(`[UserManager - getUser] Get User failure: ${e.message}`)
      throw UserManager.parseError(e, 'User')
    }
  }

  // FIXME: Put in Admin Manager
  async getUsers() {
    try {
      const users = await this._user.find()
      if (!users) {
        return []
      }
      return users
    } catch (e) {
      logger.error(`[UserManager - getUsers] Get Users failure: ${e.message}`)
      throw UserManager.parseError(e, 'User')
    }
  }
}
