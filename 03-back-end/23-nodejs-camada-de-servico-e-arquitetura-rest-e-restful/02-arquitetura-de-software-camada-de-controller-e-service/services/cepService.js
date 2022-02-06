const cepModel = require('../models/cepModel');
const ViaCep = require('../models/ViaCep');

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const cepData = await cepModel.getCep(cep);

  if (cepData)
    return {
      error: {
        message: 'CEP já existente',
        status: 409,
        code: 'alreadyExists',
      },
    };

  const newCep = await cepModel.createCep({
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  });

  return newCep;
};

const getCep = async (cep) => {
  let cepData = await cepModel.getCep(cep);

  if (cepData) return cepData;

  cepData = await ViaCep.lookupCep(cep);

  if (cepData.erro)
    return {
      error: {
        message: 'CEP não encontrado',
        status: 404,
        code: 'notFound',
      },
    };

  await cepModel.createCep(cepData);

  return cepData;
};

module.exports = {
  createCep,
  getCep,
};
