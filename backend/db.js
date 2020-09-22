const { Sequelize, DataTypes } = require('sequelize');

const DB_NAME = 'bulletin_app';
const DB_USER = 'root';
const DB_PASS = '';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: 'mysql',
  logging: false
})

const Entry = sequelize.define('Entry', {
  messageId: Sequelize.INTEGER,
  body: Sequelize.STRING,
})

sequelize.sync({ force: true })
  .then(() => console.log('database & tables created'))
  .catch((err) => console.log('err in sync', err))


module.exports = {
  // connection
  Entry
};


