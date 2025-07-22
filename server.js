const express = require('express');
const app = express();
const booksRoutes = require('./routes/livros');

app.use(express.json());

app.use('/books', booksRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
