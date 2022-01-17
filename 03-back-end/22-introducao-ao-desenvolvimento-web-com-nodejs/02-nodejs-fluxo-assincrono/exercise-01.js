/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {Promise}
 */
const sum = (a, b, c) => {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    return Promise.reject('Informe apenas números');
  }

  const result = (a + b) * c;

  if (result < 50) return Promise.reject('Valor muito baixo');

  return Promise.resolve(result);
};

/* const sum = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (
      typeof a !== 'number' ||
      typeof b !== 'number' ||
      typeof c !== 'number'
    ) {
      return reject('Informe apenas números');
    }

    const result = (a + b) * c;

    if (result < 50) return reject('Valor muito baixo');

    return resolve(result);
  });
};
 */

sum(1, 2, 3).then(console.log).catch(console.log);

sum(1, 2, '3').then(console.log).catch(console.log);

sum(100, 2, 3).then(console.log).catch(console.log);
