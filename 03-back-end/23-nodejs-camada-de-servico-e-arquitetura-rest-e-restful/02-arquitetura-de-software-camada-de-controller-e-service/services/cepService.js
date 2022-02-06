const cepModel = require('../models/cepModel');

const isValidCep = (cep) => {
  const re = /\d{5}-?\d{3}/;

  return re.test(cep);
};

const getCep = async (cep) => {
  if (!isValidCep(cep)) {
    const err = new Error('CEP inválido');
    err.status = 400;
    err.code = 'invalidData';
    throw err;
  }

  // remove dash
  cep = cep.replace(/-/g, '');

  const cepData = await cepModel.getCep(cep);

  if (!cepData) {
    const err = new Error('CEP não encontrado');
    err.status = 404;
    err.code = 'notFound';
    throw err;
  }

  return cepData;
};

module.exports = {
  getCep,
};
