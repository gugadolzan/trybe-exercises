require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const { createUser, error } = require('./middlewares');

const app = express();

app.use(bodyParser.json());

app.post('/user', createUser);

app.use(error);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
