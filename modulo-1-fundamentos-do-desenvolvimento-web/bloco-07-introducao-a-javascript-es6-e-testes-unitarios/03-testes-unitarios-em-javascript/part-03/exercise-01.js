const assert = require('assert');

const greetPeople = (people) => people.map((person) => `Hello ${person}`);

assert.strictEqual(typeof greetPeople, 'function');

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const output = greetPeople(parameter);
assert.deepStrictEqual(output, result);
