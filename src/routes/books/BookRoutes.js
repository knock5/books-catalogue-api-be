const { Router } = require('express');
const BookController = require('../../controller/BookController');

const router = Router();

router.get('/', BookController.getAllBooks);
router.get('/:id', BookController.getOneBook);
router.post('/', BookController.createBook);
router.put('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBook);

module.exports = router;
