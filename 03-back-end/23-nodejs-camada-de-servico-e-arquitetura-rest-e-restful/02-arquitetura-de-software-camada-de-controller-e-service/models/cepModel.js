const connection = require('./connection');

const getCep = async (cep) => {
  const query = `
    SELECT
      cep,
      logradouro,
      bairro,
      localidade,
      uf
    FROM
      ceps
    WHERE
      cep = ?
  `;

  const [rows] = await connection.execute(query, [cep]);

  return rows[0];
};

module.exports = {
  getCep,
};
