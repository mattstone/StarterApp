const Base = require('./Base.js');

class User extends Base {
  constructor(user) {
    super('/users');

    this.__v = user.__v
    this._id = user._id
    this.email = user.email
    this.permission = user.permission
    this.isSuspended = user.isSuspended
    this.confirmed = user.confirmed
    this.createdAt = user.createdAt
    this.updatedAt = user.updatedAt
  }

  isAdmin() {
    return this.permission == 2000
  }

}

module.exports = User;
