/**
 * @description FizzBuzz
 * @param {number} number
 * @returns {Promise}
 */
function fizzBuzz(number) {
  if (number % 1 !== 0 || number <= 0)
    return Promise.reject('O número deve ser inteiro e maior que 0');

  if (number % 3 === 0 && number % 5 === 0) return Promise.resolve('FizzBuzz');

  if (number % 3 === 0) return Promise.resolve('Fizz');

  if (number % 5 === 0) return Promise.resolve('Buzz');

  return Promise.reject(number);
}
