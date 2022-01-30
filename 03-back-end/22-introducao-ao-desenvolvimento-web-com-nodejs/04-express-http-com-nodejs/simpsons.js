const express = require('express');
const bodyParser = require('body-parser');
const { readSimpsons, writeSimpsons } = require('./simpsons-utils');
const authMiddleware = require('./authMiddleware');

const app = express();
app.use(bodyParser.json());
app.use(authMiddleware);

const PORT = 3000;
const HTTP_STATUS_OK = 200;

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

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;

  const simpsons = await readSimpsons();
  const conflict = simpsons.some((simpson) => simpson.id === id);

  if (conflict)
    return res.status(409).json({ message: 'Simpson already exists' });

  const newSimpson = { id, name };
  simpsons.push(newSimpson);

  await writeSimpsons(simpsons);

  res.status(204).end();
});

app.use(function (err, _req, res, _next) {
  console.error(err.message);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
