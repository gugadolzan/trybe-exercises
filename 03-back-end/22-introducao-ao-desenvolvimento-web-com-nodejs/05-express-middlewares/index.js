const express = require('express');
const bodyParser = require('body-parser');

const { btcRouter, postsRouter, userRouter } = require('./routes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/user', userRouter);

app.use('/btc', btcRouter);

app.use('/posts', postsRouter);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
