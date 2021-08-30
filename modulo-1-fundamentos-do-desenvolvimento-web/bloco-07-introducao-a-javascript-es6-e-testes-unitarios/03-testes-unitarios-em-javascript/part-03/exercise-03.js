const assert = require('assert');

const greaterThanTen = (array) =>
  array.reduce((acc, num) => (num > 10 ? [...acc, num] : acc), []);

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.strictEqual(typeof greaterThanTen, 'function');
const output = greaterThanTen(parameter);
assert.deepStrictEqual(output, result);
