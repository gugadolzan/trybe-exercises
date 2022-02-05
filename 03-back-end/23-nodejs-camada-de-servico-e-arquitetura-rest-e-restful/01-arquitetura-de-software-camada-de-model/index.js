require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const { error } = require('./middlewares');
const UserRouter = require('./routes/user.route');

const app = express();

app.use(bodyParser.json());

app.use('/user', UserRouter);

app.use(error);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
