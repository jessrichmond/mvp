require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { PORT } = require('./.env');
const { Entry } = require('./db');

const DIST_DIR = path.join(__dirname, '../dist');

const app = express();
app.use(bodyParser.json());
app.use(express.static(DIST_DIR));

app.get('/home', (req, res) => {
  Entry.findAll({
    limit: 20,
  })
    .then((entries) => {
      res.status(200).send(entries);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.post('/add', (req, res) => {
  const { message } = req.body;
  Entry.create({ message })
    .then((newMessage) => {
      res.status(201).send(newMessage);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(PORT, () => {
  console.log(`!! CONNECTED TO SERVER @ PORT ${PORT} !!`);
});
