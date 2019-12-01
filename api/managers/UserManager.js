import { User } from '../models'

// utils
import TokenHandler from '../utils/TokenHandler'
import logger from '../utils/logger'

export class UserManager {
  constructor() {
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
      const token = TokenHandler.signToken(newUser._id)
      logger.info('[UserManager - signUp] JWT created')
      return {
        token,
        user: newUser.serialize()
      }
    } catch (e) {
      logger.error(`[UserManager - signUp] Unable to signup user: ${e.message}`)
      throw new Error(`Unable to signup user: ${e.message}`)
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
        throw new Error('Incorrect email or password')
      }
      // if everything is ok , respond with token
      const token = TokenHandler.signToken(existingUser._id)

      return {
        token,
        user: existingUser.serialize()
      }
    } catch (e) {
      logger.error(`[UserManager - login] login failure: ${e.message}`)
      throw new Error(`[UserManager - login] login failure: ${e.message}`)
    }
  }

  async getUser(id) {
    try {
      return this._user.findById(id)
    } catch (e) {
      throw new Error('DB Error')
    }
  }

  async getUsers() {
    try {
      const users = await this._user.find()
      if (!users) {
        return []
      }
      return users.map(user => user.serialize())
    } catch (e) {
      throw new Error('DB Error')
    }
  }
}
