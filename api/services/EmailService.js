const nodemailer = require('nodemailer')
const { EMAIL_SERVICE } = require('../config/keys')

exports.EmailService = class EmailService {
  constructor() {
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
