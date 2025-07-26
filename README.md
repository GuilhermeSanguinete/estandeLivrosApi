# 📚 Estande de Livros API

Uma API REST simples feita com Node.js e Express para gerenciar livros. Este projeto foi criado com fins didáticos e é ideal para praticar conceitos básicos de back-end.

## 🚀 Funcionalidades

- ✅ Listar todos os livros
- 🔍 Buscar livro por ID
- ➕ Adicionar novo livro
- ✏️ Atualizar um livro existente
- ❌ Deletar um livro

## 🛠 Tecnologias

- Node.js
- Express.js
- JSON como armazenamento (simulando um banco de dados)
- Nodemon para desenvolvimento

## 📁 Estrutura

book-api/
├── server.js
├── routes/
│ └── books.js
├── controllers/
│ └── booksController.js
├── data/
│ └── books.json
├──readme.md
├──package-lock.json
└──package.json

## ▶️ Como executar

1. Clone o repositório:
git clone https://github.com/GuilhermeSanguinete/estandeLivrosApi.git
cd estandeLivrosApi

2. Instale as dependências:
npm install

3. Execute a API:
npm run dev

4. Acesse: `http://localhost:3000/books`

## 📬 Exemplos de Requisições

### POST /books
json->

{
"title": "1984",
"author": "George Orwell"
}

### PUT /books/:id
json->

{
  "title": "1984 (edição atualizada)"
}

## 📌 Objetivo
Esse projeto é parte do meu estudo com Node.js e tem como objetivo consolidar a lógica de rotas, controllers e persistência básica.