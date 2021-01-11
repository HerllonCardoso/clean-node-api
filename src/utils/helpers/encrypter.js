const bcrypt = require('bcrypt')
const MissingParamError = require('../errors/missing-param-error')

module.exports = class Encrypter {
  async compare (value, hashedValue) {
    if (!value || !hashedValue) {
      throw new MissingParamError('value')
    }
    const isValid = bcrypt.compare(value, hashedValue)
    return isValid
  }
}
