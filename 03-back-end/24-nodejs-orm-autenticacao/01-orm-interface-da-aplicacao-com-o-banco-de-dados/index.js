const express = require('express');
const bodyParser = require('body-parser');

const book = require('./controllers/book');
const author = require('./controllers/author');

const app = express();

app.use(bodyParser.json());

app.get('/books', book.findAll);
app.get('/books/:id', book.findById);
app.get('/author/:name', author.getByAuthorName);
app.post('/books', book.create);
app.put('/books/:id', book.update);
app.delete('/books/:id', book.remove);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
