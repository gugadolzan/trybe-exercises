const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./routes/userRouter');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/user', userRouter);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
