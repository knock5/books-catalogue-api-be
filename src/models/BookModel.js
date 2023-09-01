const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  judulBuku: {
    type: String,
    required: true,
  },
  pengarang: {
    type: String,
    required: true,
  },
  sinopsis: {
    type: String,
    required: true,
  },
});

BookSchema.set('timestamps', true);
const Books = mongoose.model('Books', BookSchema);

module.exports = Books;
