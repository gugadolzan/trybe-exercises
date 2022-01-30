const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.get('/ping', (_req, res) => res.json({ message: 'pong' }));

app.post('/hello', ({ body: { name } }, res) =>
  res.json({ message: `Hello, ${name}!` })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
