const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bulletin'
})

connection.connect(() => {
  console.log('!! CONNECTED TO DB !!');
  // const createDB = `CREATE DATABASE IF NOT EXISTS bulletin`;

  // connection.query(createDB, (err, result) => {
  //   if (err) console.log(err);
  //   console.log('!! CONNECTED TO BULLETIN !!');
  // })

  const createUsers =
    `CREATE TABLE IF NOT EXISTS users(
      user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
      username VARCHAR(15),
      zipcode INT(5)
    )`

  // connection.query(createUsers, (err, result) => {
  //   if (err) console.log('error creating users table:', err);
  // })

  const createMessages =
    `CREATE TABLE IS NOT EXISTS messages(
      message_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
      user_id
      body VARCHAR()
      date DATE
    )`

  // connection.query(createMessages, (err, result) => {
  //   if (err) console.log('error creating messages table:', err);
  // })

})


module.exports = {
  connection
};

