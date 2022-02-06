require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const errorHandler = require('./middlewares/error');
const cepRouter = require('./routes/cepRouter');

app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong!' }));

app.use('/cep', cepRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
