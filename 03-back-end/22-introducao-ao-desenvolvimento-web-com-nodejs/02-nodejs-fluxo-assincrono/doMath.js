/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {Promise}
 */
const doMath = (a, b, c) => {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    return Promise.reject('Informe apenas números');
  }

  const result = (a + b) * c;

  if (result < 50) return Promise.reject('Valor muito baixo');

  return Promise.resolve(result);
};

/* Alternative
const doMath = (a, b, c) => {
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

/* Tests
doMath(1, 2, 3).then(console.log).catch(console.error);

doMath(1, 2, '3').then(console.log).catch(console.error);

doMath(100, 2, 3).then(console.log).catch(console.error);
 */

/**
 * @description Generate a random number between 1 and 10
 * @returns {number}
 */
const randomNumber = () => Math.floor(Math.random() * 100 + 1);

/* const callDoMath = () => {
  const randomNumbers = Array.from({ length: doMath.length }, () =>
    randomNumber()
  );

  doMath(...randomNumbers)
    .then(console.log)
    .catch(console.error);
}; */

const callDoMath = async () => {
  const randomNumbers = Array.from({ length: doMath.length }, () =>
    randomNumber()
  );

  try {
    const result = await doMath(...randomNumbers);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

callDoMath();
