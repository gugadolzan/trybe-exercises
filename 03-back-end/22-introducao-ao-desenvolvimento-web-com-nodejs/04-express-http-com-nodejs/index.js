const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./authMiddleware');
const generateToken = require('./generateToken');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;
const HTTP_STATUS_OK = 200;
const HTTP_STATUS_UNAUTHORIZED = 401;

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if (!email || !password || !firstName || !phone)
    return res
      .status(HTTP_STATUS_UNAUTHORIZED)
      .json({ message: 'Missing fields' });

  const token = generateToken();

  res.status(HTTP_STATUS_OK).json({ token });
});

app.get('/ping', authMiddleware, (_req, res) => res.json({ message: 'pong' }));

app.post('/hello', authMiddleware, ({ body: { name } }, res) =>
  res.json({ message: `Hello, ${name}!` })
);

app.post('/greetings', authMiddleware, ({ body: { name, age } }, res) =>
  age > 17
    ? res.status(HTTP_STATUS_OK).json({ message: `Hello, ${name}!` })
    : res.status(HTTP_STATUS_UNAUTHORIZED).json({ message: 'Unauthorized' })
);

app.put('/users/:name/:age', authMiddleware, ({ params: { name, age } }, res) =>
  res.json({ message: `Your name is ${name} and you are ${age} years old` })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
