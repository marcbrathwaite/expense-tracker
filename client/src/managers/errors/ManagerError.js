export class ManagerError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ManagerError'
  }
}
