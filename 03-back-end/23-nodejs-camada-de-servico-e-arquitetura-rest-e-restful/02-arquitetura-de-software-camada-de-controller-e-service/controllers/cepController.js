const rescue = require('express-rescue');

const cepService = require('../services/cepService');

const createCep = rescue(async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const newCep = await cepService.createCep({
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  });

  res.status(200).json(newCep);
});

const getCep = rescue(async (req, res) => {
  const { cep } = req.params;

  const cepData = await cepService.getCep(cep);

  res.status(200).json(cepData);
});

module.exports = {
  createCep,
  getCep,
};
