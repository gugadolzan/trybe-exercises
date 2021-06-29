function longerWord(names) {
  let longerWord = '';
  for (let index in names) {
    if (names[index].length > longerWord.length) {
      longerWord = names[index];
    }
  }
  return longerWord;
};
console.log(longerWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));