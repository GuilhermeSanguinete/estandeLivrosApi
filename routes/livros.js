const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livrosController');

router.get('/', livrosController.getAllBooks);
router.get('/:id', livrosController.getBookById);
router.post('/', livrosController.createBook);
router.put('/:id', livrosController.updateBook);
router.delete('/:id', livrosController.deleteBook);

module.exports = router;
