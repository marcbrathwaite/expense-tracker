import PasswordValidator from 'password-validator'
import validator from 'validator'
import isNumber from 'is-number'

export const isValidEmail = (input) => {
  return validator.isEmail(input)
}

export const isValidPassword = (input) => {
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

export const isNotEmpty = (input) => {
  return !validator.isEmpty(input)
}

export const isPositiveNumber = (input) => {
  return isNumber(input) && !input.includes('-')
}

export const isValidCurrency = (input) => {
  return validator.isCurrency(input, { allow_negatives: false, thousands_separator: '' })
}
