import nodemailer from 'nodemailer'
import { EMAIL_SERVICE } from '../config/keys'

export class EmailService {
  constructor() {
    // It looks like this is mean to make the class a singleton?
    // One possible alternative, is to export the instance of the class from this module
    // Since in JS, all modules are singletons. 
    const instance = this.constructor.instance
    if (instance) {
      return instance
    }
    this.constructor.instance = this

    // Assign User model
    this._tranporter = nodemailer.createTransport({
      host: EMAIL_SERVICE.EMAIL_HOST,
      port: EMAIL_SERVICE.EMAIL_PORT,
      auth: {
        user: EMAIL_SERVICE.EMAIL_USERNAME,
        pass: EMAIL_SERVICE.EMAIL_PASSWORD
      }
    })
  }
  // shared instance of EmailService
  static get shareInstance() {
    if (this._sharedInstance === undefined) {
      this._sharedInstance = new EmailService()
    }
    return this._sharedInstance
  }

  async sendEmail(options) {
    // define mail options
    const mailOptions = {
      from: 'Marc Brathwaite <marcbrathwaite@brathworks.io>',
      to: options.email,
      subject: options.subject,
      text: options.message
    }

    // Send mail
    await this._tranporter.sendMail(mailOptions)
  }
}
