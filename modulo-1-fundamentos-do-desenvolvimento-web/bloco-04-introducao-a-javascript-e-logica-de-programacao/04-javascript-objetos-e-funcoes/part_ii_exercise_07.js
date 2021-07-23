function wordEnding(word, ending) {
  let compare = '',
    count = word.length - 1;

  for (let index = ending.length; index > 0; index -= 1) { // monta o final da string 'word' com a quantidade de caracteres da string 'ending'
    compare += word[count];
    count -= 1;
  }

  let reverse = compare.split('').reverse().join(''); // inverte a string 'compare' gerada anteriormente

  if (reverse === ending) {
    return true;
  } else {
    return false;
  }
};

console.log(wordEnding('trybe', 'be'));
console.log(wordEnding('joaofernando', 'fernan'));