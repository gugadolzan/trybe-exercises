const assert = require('assert');

const getLargestNumber = (array) => array.sort((a, b) => b - a)[0];

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;

const output = getLargestNumber(parameter);
const unchangedArray = [45, 8, 2, 50, 99, 1, 7];

assert.strictEqual(output, result);
assert.deepStrictEqual(parameter, unchangedArray);
