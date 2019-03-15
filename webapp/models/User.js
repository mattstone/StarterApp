const Base = require('./Base.js');

class User extends Base {
  constructor(user) {
    super('/users', user);

    this.confirmed = user.confirmed
    this.createdAt = user.createdAt
    this.email = user.email
    this.isSuspended = user.isSuspended
    this.updatedAt = user.updatedAt
    this.__v = user.__v
    this._id = user._id
  }
}

module.exports = User;
