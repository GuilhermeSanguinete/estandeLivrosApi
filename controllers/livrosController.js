const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/livros.json');

function loadBooks() {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }
  catch (ex) {
    console.error("Erro ao carregar livros:", ex.message);
  }
}

function saveBooks(books) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
  }
  catch (ex) {
    console.error("Erro ao salvar livro:", ex.message);
  }
}

exports.getAllBooks = (req, res) => {
  try {
    const books = loadBooks();
    res.json(books);
  }
  catch (ex) {
    console.error("Erro ao buscar livros:", ex.message);
  }
};

exports.getBookById = (req, res) => {
  try {
    const books = loadBooks();
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });
    res.json(book);
  }
  catch (ex) {
    console.error("Erro ao buscar livros por id:", ex.message);
  }
};

exports.createBook = (req, res) => {
  try {
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
  }
  catch (ex) {
    console.error("Erro ao cadastrar novo livro", ex.message);
  }
};

exports.updateBook = (req, res) => {
  try {
    const books = loadBooks();
    const index = books.findIndex(b => b.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Livro não encontrado' });

    books[index] = { ...books[index], ...req.body };
    saveBooks(books);
    res.json(books[index]);
  }
  catch (ex) {
    console.error("Erro ao alterar livro:", ex.message);
  }
};

exports.deleteBook = (req, res) => {
  try {
    let books = loadBooks();
    const index = books.findIndex(b => b.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Livro não encontrado' });

    const deleted = books.splice(index, 1);
    saveBooks(books);
    res.json(deleted[0]);
  }
  catch (ex) {
    console.error("Erro ao deletar livro da estante", ex.message);
  }
};
