require('dotenv').config()
const express = require('express')
const { PORT } = require('./.env')
const { Entry } = require('./db')
const path = require('path');
const bodyParser = require('body-parser');

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const datamuse = 'https://api.datamuse.com/words?';

const app = express();
app.use(bodyParser.json());
app.use(express.static(DIST_DIR));


app.get('/home', (req, res) => {
  Entry.findAll()
    .then((entries) => {
      res.status(200).send(entries);
    })
    .catch((err) => {
      res.status(500).send(err);
    })
})

app.post('/add', (req, res) => {
  const { message } = req.body;
  Entry.create({ message })
    .then((message) => {
      console.log('ok');
      res.status(201).end;
    })
    .catch((err) => {
      res.status(500).send(err);
    })
})


app.listen(PORT, () => {
  console.log(`!! CONNECTED TO SERVER @ PORT ${PORT} !!`);
});