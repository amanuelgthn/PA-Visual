import { Rule } from 'antd/es/form'
import { CONSTANTS } from './config/Constants'

export const RequiredField: Rule = {
  required: true,
  message: CONSTANTS.STRINGS.EN.FIELD_REQUIRED,
}

export const EmailValidation: Rule = {
  type: 'email',
  message: CONSTANTS.STRINGS.EN.NOT_AN_EMAIL,
}

export const ConfirmPassword: Rule = ({ getFieldValue }) => ({
  validator(_, value) {
    if (!value || getFieldValue('password') === value) {
      return Promise.resolve()
    }
    return Promise.reject(new Error(CONSTANTS.STRINGS.EN.PASSWORD_DONT_MATCH))
  },
})
