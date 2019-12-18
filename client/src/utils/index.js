import PasswordValidator from 'password-validator'
import validator from 'validator'

export function isValidEmail(input) {
  return validator.isEmail(input)
}

export function isValidPassword(input) {
  // I hadn't seen this lib before... cool!
  const schema = new PasswordValidator()
  schema
    .is()
    .min(8) // min length of 8 characters
    .is()
    .max(100) // max length of 100 characters
    .has()
    .lowercase() // must have lowercase characters
    .has()
    .uppercase() // must have uppercase characters
    .has()
    .digits() // must have digits
    .has()
    .not()
    .spaces() // should not have spaces

  return schema.validate(input)
}

export function isNotEmpty(input) {
  return !validator.isEmpty(input)
}
