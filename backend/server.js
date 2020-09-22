require('dotenv').config()
const express = require('express')
const app = express()
const { PORT } = require('./.env')
const { Entry } = require('./db')
const path = require('path');
const bodyParser = require('body-parser');

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const datamuse = 'https://api.datamuse.com/words?';
   
app.use(bodyParser.json());
app.use(express.static(DIST_DIR));

// app.get(`${datamuse}ml=ringing+in+the+ears&max=4`, (req, res) => {
//   res.status(200).send('YOOOOO');
// })


app.post('/signup', (req, res) => {
  const { username } = req.body;
  res.send('hello');
})

// app.post('/signup', (req, res) => {
//   const { username, password } = req.body;
//   return User.create({ username, password});
// })


app.listen(PORT, () => {
  console.log(`!! CONNECTED TO SERVER @ PORT ${PORT} !!`);
});