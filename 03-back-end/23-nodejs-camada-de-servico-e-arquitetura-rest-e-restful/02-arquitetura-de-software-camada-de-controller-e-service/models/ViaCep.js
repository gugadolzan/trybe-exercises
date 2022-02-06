const axios = require('axios');

const formatCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep,
  logradouro,
  bairro,
  localidade,
  uf,
});

// CEP validation is done in the service layer
const lookupCep = async (cep) =>
  await axios
    .get(`https://viacep.com.br/ws/${cep}/json/`)
    .then(({ data }) => (data.erro ? data : formatCep(data)));

module.exports = {
  lookupCep,
};
