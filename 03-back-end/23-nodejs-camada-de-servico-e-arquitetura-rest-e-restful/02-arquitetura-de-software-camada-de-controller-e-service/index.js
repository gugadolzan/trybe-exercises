require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const cepController = require('./controllers/cepController');

app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong!' }));

app.get('/cep/:cep', cepController.getCep);

app.use((err, _req, res, _next) => {
  const status = err.status || 500;
  const code = err.code || 'internalError';
  const message = err.message || 'Internal server error';

  if (status === 500) {
    console.error(err);
  }

  res.status(status).json({
    error: {
      code,
      message,
    },
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
