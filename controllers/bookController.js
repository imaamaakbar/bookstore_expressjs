const Book = require('../models').Book;

// @route   GET api/books
// @desc    Get all books
// @access  Public
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      attributes : {exclude : ["createdAt","updatedAt"]}
    });
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   POST api/books
// @desc    Add new book
// @access  Private
exports.addBook = async (req, res) => {
  console.log(req.body);
  const { title, author, publishedDate, pages, genre } = req.body;

  try {
    const newBook = await Book.create({
      title,
      author,
      publishedDate,
      pages,
      genre,
    });

    res.json(newBook);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   PUT api/books/:id
// @desc    Update book
// @access  Private
exports.updateBook = async (req, res) => {
  const { title, author, publishedDate, pages, genre } = req.body;

  try {
    let book = await Book.findByPk(req.params.id);

    if (!book) return res.status(404).json({ msg: 'Book not found' });

    book = await book.update({
      title,
      author,
      publishedDate,
      pages,
      genre,
    });

    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   DELETE api/books/:id
// @desc    Delete book
// @access  Private
exports.deleteBook = async (req, res) => {
  try {
    let book = await Book.findByPk(req.params.id);

    if (!book) return res.status(404).json({ msg: 'Book not found' });

    await book.destroy();

    res.json({ msg: 'Book removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

