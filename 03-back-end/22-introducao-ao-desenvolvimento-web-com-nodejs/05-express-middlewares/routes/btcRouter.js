const express = require('express');
const axios = require('axios');

const { isValidToken } = require('../middlewares/validations');

const API = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const router = express.Router();

router.get('/price', isValidToken, async (_req, res) => {
  const { data } = await axios.get(API);

  res.json(data);
});

module.exports = router;
