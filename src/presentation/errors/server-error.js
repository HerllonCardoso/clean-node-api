module.exports = class ServerError extends Error {
  constructor () {
    super('Internal error, try again in a few moments')
    this.name = 'UnauthorizedError'
  }
}
