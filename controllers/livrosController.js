const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/livros.json');

function loadBooks() {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function saveBooks(books) {
  fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
}

exports.getAllBooks = (req, res) => {
  const books = loadBooks();
  res.json(books);
};

exports.getBookById = (req, res) => {
  const books = loadBooks();
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Livro não encontrado' });
  res.json(book);
};

exports.createBook = (req, res) => {
  const books = loadBooks();
  const newBook = {
    id: Date.now(),
    title: req.body.title,
    author: req.body.author,
    year: req.body.year
  };
  books.push(newBook);
  saveBooks(books);
  res.status(201).json(newBook);
};

exports.updateBook = (req, res) => {
  const books = loadBooks();
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Livro não encontrado' });

  books[index] = { ...books[index], ...req.body };
  saveBooks(books);
  res.json(books[index]);
};

exports.deleteBook = (req, res) => {
  let books = loadBooks();
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Livro não encontrado' });

  const deleted = books.splice(index, 1);
  saveBooks(books);
  res.json(deleted[0]);
};
