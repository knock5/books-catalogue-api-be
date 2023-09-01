require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes');

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
app.use(express.json());
app.use('/api/v1', router);
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(
    `Server berjalan pada http://${process.env.HOST}:${process.env.PORT}`
  );
});
