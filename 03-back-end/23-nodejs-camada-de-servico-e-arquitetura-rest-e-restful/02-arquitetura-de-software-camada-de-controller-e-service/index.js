require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

app = express();

app.use(bodyParser.json());

app.get('/ping', (req, res) => res.status(200).json({ message: 'pong!' }));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
