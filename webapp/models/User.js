const Base = require('./Base.js');

class User extends Base {
  constructor(user) {
    super('/users')

    this.user = {}
    this.users = []

    if (user !== null && user !== undefined) { this.setUser(user) }
  }

  setUser(user) {
    this.user.__v = user.__v
    this.user._id = user._id
    this.user.email = user.email
    this.user.permission = user.permission
    this.user.isSuspended = user.isSuspended
    this.user.confirmed = user.confirmed
    this.user.createdAt = user.createdAt
    this.user.updatedAt = user.updatedAt
  }

  isAdmin() {
    return this.permission == 2000
  }
}

module.exports = User;
