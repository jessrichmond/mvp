const { Sequelize } = require('sequelize');

const DB_NAME = 'hi_haiku';
const DB_USER = 'root';
const DB_PASS = '';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: 'mysql',
  logging: false,
});

const Entry = sequelize.define('Entry', {
  messageId: Sequelize.INTEGER,
  message: Sequelize.STRING,
});

sequelize.sync()
  .then(() => console.log('database & tables created'))
  .catch((err) => console.log('err in sync', err));

module.exports = {
  Entry,
};
