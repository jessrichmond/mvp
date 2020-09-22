const Model = require('./model');

class Entries extends Model {
  constructor() {
    super('entries');
  }

  create(body) {
    const newEntry = {
      body
    }
    return super.create.call(this, newEntry);
  }
}


module.exports = new Entries();