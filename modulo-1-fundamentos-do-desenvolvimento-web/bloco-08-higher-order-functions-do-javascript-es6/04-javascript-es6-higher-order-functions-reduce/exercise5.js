const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.join('').toLowerCase().split('').reduce((acc, letter) => letter === 'a' ? acc + 1 : acc, 0);
}

// join('') returns 'AanemarieAdervandesAkifusaAbegildo...'
// toLowerCase() self explained
// split('') returns ["a", "a", "n", "e", ...]

assert.deepStrictEqual(containsA(), 20);
