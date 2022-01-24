const sum = require('./exercise-01');

/**
 * @description Generate a random number between 1 and 10
 * @returns {number}
 */
const randomNumber = () => Math.floor(Math.random() * 100 + 1);

const randomNumbers = Array.from({ length: sum.length }, () => randomNumber());

sum(...randomNumbers)
  .then(console.log)
  .catch(console.log);
