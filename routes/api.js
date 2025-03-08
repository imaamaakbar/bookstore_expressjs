const express = require('express');
const router = express.Router();
const { getBooks, addBook, updateBook, deleteBook } = require('../controllers/bookController');

// @route   GET api/books
// @desc    Get all books
// @access  Public
router.get('/', getBooks);

// @route   POST api/books
// @desc    Add new book
// @access  Private
router.post('/',  addBook);

// @route   PUT api/books/:id
// @desc    Update book
// @access  Private
router.put('/:id', updateBook);

// @route   DELETE api/books/:id
// @desc    Delete book
// @access  Private
router.delete('/:id',  deleteBook);

module.exports = router;
