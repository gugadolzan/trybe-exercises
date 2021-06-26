let n = 5,
  line = '',
  position = n;

for (let index = 1; index <= n; index += 1) {
  for (let index2 = 1; index2 <= n; index2 += 1) {
    if (index2 < position) {
      line += ' ';
    } else {
      line += '*';
    }
  }
  console.log(line);
  line = '';
  position -= 1;
};