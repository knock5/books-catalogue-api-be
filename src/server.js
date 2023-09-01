require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// express app
const app = express();

// connect to mongo
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});
mongoose.connection
  .on('open', () => console.log('DATABASE CONNECTED'))
  .on('close', () => console.log('DATABASE CLOSE'))
  .on('error', (error) => console.log('DATABASE ERROR', error));

// routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello there!' });
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server berjalan pada http://${process.env.HOST}:${process.env.PORT}`
  );
});
