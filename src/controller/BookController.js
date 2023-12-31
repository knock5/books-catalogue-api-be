const Books = require('../models/BookModel');
const ClientError = require('../exceptions/ClientError');
const NotFoundError = require('../exceptions/NotFoundError');

const BookController = {
  async getOneBook(req, res) {
    try {
      const { id } = req.params;
      const result = await Books.findById(id);

      if (!result) throw new NotFoundError('Book is not found');

      res.status(200).json(result);
    } catch (error) {
      if (error instanceof ClientError) {
        res.status(res.statusCode).json({
          status: 'fail',
          message: error.message,
        });
      }
      // server error
      res.status(500).json({
        status: 'fail',
        message: 'Maaf, terjadi kesalahan pada server kami...',
      });
    }
  },

  async getAllBooks(req, res) {
    try {
      const books = await Books.find();

      res.status(200).json(books);
    } catch (error) {
      const { message } = error;
      res.status(500).json(message);
    }
  },

  async createBook(req, res) {
    try {
      const { judulBuku, pengarang, sinopsis } = req.body;
      const result = await Books.create({
        judulBuku,
        pengarang,
        sinopsis,
      });
      await result.save();

      res.status(201).json(result);
    } catch (error) {
      if (error instanceof ClientError) {
        res.status(res.statusCode).json({
          status: 'fail',
          message: error.message,
        });
      }
      // server error
      res.status(500).json({
        status: 'fail',
        message: 'Maaf, terjadi kesalahan pada server kami...',
      });
    }
  },

  async updateBook(req, res) {
    try {
      const { id } = req.params;

      const { judulBuku, pengarang, sinopsis } = req.body;
      const target = await Books.findOne({ _id: id });

      if (!target) throw new NotFoundError('Book is not found');

      const result = await Books.findByIdAndUpdate(id, {
        judulBuku,
        pengarang,
        sinopsis,
      });

      res.status(200).json({
        message: 'Book updated successful',
        data: {
          result,
        },
      });
    } catch (error) {
      if (error instanceof ClientError) {
        res.status(res.statusCode).json({
          status: 'fail',
          message: error.message,
        });
      }
      // server error
      res.status(500).json({
        status: 'fail',
        message: 'Maaf, terjadi kesalahan pada server kami...',
      });
    }
  },

  async deleteBook(req, res) {
    try {
      const { id } = req.params;
      const result = await Books.findOneAndDelete({ _id: id });

      if (!result) throw new NotFoundError('Book is not found');

      res.status(200).json({ message: 'Book deleted succesful' });
    } catch (error) {
      if (error instanceof ClientError) {
        res.status(res.statusCode).json({
          status: 'fail',
          message: error.message,
        });
      }
      // server error
      res.status(500).json({
        status: 'fail',
        message: 'Maaf, terjadi kesalahan pada server kami...',
      });
    }
  },
};

module.exports = BookController;
