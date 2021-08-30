const assert = require('assert');

const removeVowels = (word) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 1;

  const result = word.split('').reduce((acc, letter) => {
    if (vowels.includes(letter)) {
      acc += counter;
      counter += 1;
      return acc;
    } else {
      acc += letter;
      return acc;
    }
  }, '');

  return result;
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof removeVowels, 'function');
const output = removeVowels(parameter);
assert.strictEqual(output, result);
