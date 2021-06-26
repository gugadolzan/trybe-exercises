let n = 5;

for (let index = 1; index <= n; index += 1) {
  let line = '';
  for (let otherIndex = 1; otherIndex <= index; otherIndex += 1) {
    line += '*';
  };
  console.log(line);
};