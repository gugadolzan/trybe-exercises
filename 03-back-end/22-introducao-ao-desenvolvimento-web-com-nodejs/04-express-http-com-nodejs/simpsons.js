const express = require('express');
const bodyParser = require('body-parser');
const { readSimpsons, writeSimpsons } = require('./simpsons-utils');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;
const HTTP_STATUS_OK = 200;
const FILE_NAME = 'simpsons.json';

app.get('/simpsons', async (_req, res) => {
  const simpsons = await readSimpsons();
  res.status(HTTP_STATUS_OK).json(simpsons);
});

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;

  const simpsons = await readSimpsons();
  const simpson = simpsons.find((simpson) => simpson.id === id);

  if (!simpson) return res.status(404).json({ message: 'Simpson not found' });

  res.status(HTTP_STATUS_OK).json(simpson);
});

app.use(function (_err, _req, res, _next) {
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
