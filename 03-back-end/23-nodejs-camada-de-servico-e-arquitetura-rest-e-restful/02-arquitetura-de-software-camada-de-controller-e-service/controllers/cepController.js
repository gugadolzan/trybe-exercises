const rescue = require('express-rescue');

const cepService = require('../services/cepService');

const getCep = rescue(async (req, res) => {
  const { cep } = req.params;

  const cepData = await cepService.getCep(cep);

  res.status(200).json(cepData);
});

module.exports = {
  getCep,
};
