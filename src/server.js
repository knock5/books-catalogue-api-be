require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello there!' });
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server berjalan pada http://${process.env.HOST}:${process.env.PORT}`
  );
});
