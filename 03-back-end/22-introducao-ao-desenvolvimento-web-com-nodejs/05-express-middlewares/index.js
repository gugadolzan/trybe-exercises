const express = require('express');
const bodyParser = require('body-parser');

const { btcRouter, postsRouter, teamsRouter, userRouter } = require('./routes');
const { HTTP_STATUS_NOT_FOUND } = require('./utils');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/user', userRouter);

app.use('/btc', btcRouter);

app.use('/posts', postsRouter);

app.use('/teams', teamsRouter);

app.use('*', (_req, _res, next) => {
  const err = {
    status: HTTP_STATUS_NOT_FOUND,
    message: 'Opsss router not found',
  };
  next(err);
});

/**
 * Error handler
 */
app.use((err, _req, res, _next) => {
  res.status(err.status).json({ message: err.message });
});

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
