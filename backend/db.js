const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bulletin'
})

connection.connect(() => {
  console.log('!! CONNECTED TO DB !!');
});

module.exports = {
  connection
};