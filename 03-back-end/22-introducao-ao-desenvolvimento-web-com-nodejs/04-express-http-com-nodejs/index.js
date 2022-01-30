const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.get('/ping', (_req, res) => res.json({ message: 'pong' }));

app.post('/hello', ({ body: { name } }, res) =>
  res.json({ message: `Hello, ${name}!` })
);

app.post('/greetings', ({ body: { name, age } }, res) =>
  age > 17
    ? res.status(200).json({ message: `Hello, ${name}!` })
    : res.status(401).json({ message: 'Unauthorized' })
);

app.put('/users/:name/:age', ({ params: { name, age } }, res) =>
  res.json({ message: `Your name is ${name} and you are ${age} years old` })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
