module.exports = class UnauthorizedError extends Error {
  constructor () {
    super('Unauthorized Error, be sure you have privileges to access this resource')
    this.name = 'UnauthorizedError'
  }
}
