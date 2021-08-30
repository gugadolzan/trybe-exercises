function indexOfHighest(numbers) {
  let index = 0;
  for (let i in numbers) {
    if (numbers[i] > numbers[index]) {
      index = i;
    }
  }
  return index;
};
console.log(indexOfHighest([2, 3, 6, 7, 10, 1]));