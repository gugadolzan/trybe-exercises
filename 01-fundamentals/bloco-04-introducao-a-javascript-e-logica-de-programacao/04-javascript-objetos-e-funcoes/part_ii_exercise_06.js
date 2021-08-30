function sum(number) {
  let sum = 0;
  for (let count = 1; count <= number; count += 1) {
    sum += count;
  }
  return sum;
};
console.log(sum(5));