function indexOfLowest(numbers) {
  let index = 0;
  for (let i in numbers) {
    if (numbers[i] < numbers[index]) {
      index = i;
    }
  }
  return index;
};
console.log(indexOfLowest([2, 4, 6, 7, 10, 0, -3]));