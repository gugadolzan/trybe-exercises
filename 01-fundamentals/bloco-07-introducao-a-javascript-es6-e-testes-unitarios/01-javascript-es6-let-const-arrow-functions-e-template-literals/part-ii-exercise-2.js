const longestWord = (str) => {
  const words = str.split(' ');
  let longestWord = '';
  for (const word of words) {
    word.length > longestWord.length ? (longestWord = word) : null;
  }
  console.log(longestWord);
};

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");
