const connection = require('./connection');

function create({ firstName, lastName, email, password }) {
  const query = `
    INSERT INTO users (first_name, last_name, email, password)
    VALUES (?, ?, ?, ?)
  `;

  return connection
    .execute(query, [firstName, lastName, email, password])
    .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
}

module.exports = {
  create,
};
