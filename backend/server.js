require('dotenv').config()
const express = require('express')
const app = express()
const { PORT } = require('./.env')
const db = require('./db')

app.listen(PORT, () => {
  console.log(`!! CONNECTED TO SERVER @ PORT ${PORT} !!`);
});

// db.connect((err) => {
//   if (err) {
//     console.log('not listening to database');
//   } else {
//     app.listen(PORT, () => {
//       console.log(`bulletin listening at http://localhost:${PORT}`);
//     });
//   }
// });

app.get('/', (req, res) => {
  res.send('hellloooooo');
})