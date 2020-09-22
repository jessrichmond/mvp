const { db } = require('../db');

class Model {
  constructor(tablename) {
    this.tablename = tablename;
  }

  create(options) {
    const queryString = `INSERT INTO ${this.tablename} SET ?`;
    return db.query(queryString, options);
  }
}

module.exports = Model;