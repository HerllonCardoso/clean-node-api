const { MissingParamError } = require('../../presentation/errors')

class AuthUseCase {
  async auth (email) {
    if (!email) {
      throw new MissingParamError()
    }
  }
}

const makeSut = () => {
  return new AuthUseCase()
}

describe('Auth Use Case', () => {
  test('Should throw if no email is provided', async () => {
    const sut = makeSut()
    const promise = sut.auth()
    expect(promise).rejects.toThrow()
  })
})
