const { Router } = require('express');
const bookRouter = require('./books/BookRoutes');

const router = Router();

router.use('/books', bookRouter);

module.exports = router;
