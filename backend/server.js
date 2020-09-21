require('dotenv').config()
const express = require('express')
const app = express()
const { PORT } = require('./.env')

app.listen(PORT, () => {
  console.log(`bulletin listening at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('hellloooooo');
})