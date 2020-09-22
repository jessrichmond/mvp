require('dotenv').config()
const express = require('express')
const app = express()
const { PORT } = require('./.env')
const db = require('./db')
const path = require('path');
const bodyParser = require('body-parser');

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const test = {
  username: 'pizzaforbrkfst',
  message: 'hello hello?'
}

app.use(bodyParser.JSON());
app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
  res.status(200).send(test);
})

app.listen(PORT, () => {
  console.log(`!! CONNECTED TO SERVER @ PORT ${PORT} !!`);
});