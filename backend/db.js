// const mysql = require('mysql');
const Sequelize = require('sequelize');

const DB_NAME = 'bulletin_app';
const DB_USER = 'root';
const DB_PASS = '';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: 'mysql',
})

const User = sequelize.define('User', {
  user_id: Sequelize.NUMBER,
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  location: Sequelize.NUMBER
})

const Entry = sequelize.define('Entry', {
  message_id: Sequelize.NUMBER,
  user_id: Sequelize.NUMBER,
  body: Sequelize.STRING,
  date: Sequelize.DATE
})

sequelize.authenticate()
  .then(() => console.log('sequelize running, db connected'))
  .catch((err) => console.log('sequelize auth failed: ', err))


module.exports = {
  // connection
  User,
  Entry
};

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'bulletin'
// })


// connection.connect(() => {
//   return Promise.resolve()
//     .then(() => console.log('!! CONNECTED TO MYSQL !!'))
//     .then(() => connection.query(`CREATE DATABASE IF NOT EXISTS bulletin`))
//     .then(() => {connection.query(
//       `CREATE TABLE IF NOT EXISTS users (
//         user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
//         username VARCHAR(15) UNIQUE,
//         password VARCHAR(64),
//         location INT(5)
//       )`
//     )})
//     .then(() => {connection.query(
//       `CREATE TABLE IF NOT EXISTS messages (
//         message_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
//         user_id INT,
//         body VARCHAR(255),
//         date DATE
//       )`
//     )})
//     .then(() => {
//       connection.end();
//     })
// })


