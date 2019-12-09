export class SignUpError extends Error {
  constructor(message) {
    super(message)
    this.name = 'SignUpError'
  }
}
