const Model = require('./model');

class Users extends Model {
  constructor() {
    super('users');
  }

  create({ username, password, location }) {
    const newUser = {
      username,
      password,
      location
    }
    return super.create.call(this, newUser);
  }
}


module.exports = new Users();