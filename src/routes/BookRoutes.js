const { Router } = require('express');
const BookController = require('../controller/BookController');

const router = Router();

router.get('/books', BookController.getAllBooks);
router.get('/books/:id', BookController.getOneBook);
router.post('/books', BookController.createBook);
router.put('/books/:id', BookController.updateBook);
router.delete('/books/:id', BookController.deleteBook);

module.exports = router;
