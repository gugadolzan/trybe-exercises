let n = 5,
  output = '',
  numberOfLines = (n + 1) / 2,
  onLeft = numberOfLines,
  onRight = numberOfLines;

for (let index = 1; index <= numberOfLines; index += 1) {
  for (let index2 = 1; index2 <= n; index2 += 1) {
    if (index2 >= onLeft && index2 <= onRight) {
      output += '*';
    } else {
      output += ' ';
    }
  }
  console.log(output);
  output = '';
  onRight += 1;
  onLeft -= 1
};