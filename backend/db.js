const mysql = require('mysql');

const DB_NAME = 'bulletin_app';
const DB_USER = 'root';
const DB_PASS = '';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bulletin'
})


connection.connect(() => {
  return Promise.resolve()
    .then(() => console.log('!! CONNECTED TO MYSQL !!'))
    .then(() => connection.query(`CREATE DATABASE IF NOT EXISTS bulletin`))
    .then(() => {connection.query(
      `CREATE TABLE IF NOT EXISTS users (
        user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(15) UNIQUE,
        password VARCHAR(64),
        location INT(5)
      )`
    )})
    .then(() => {connection.query(
      `CREATE TABLE IF NOT EXISTS messages (
        message_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        user_id INT,
        body VARCHAR(255),
        date DATE
      )`
    )})
    .then(() => {
      connection.end();
    })
})

module.exports = {
  connection
};

