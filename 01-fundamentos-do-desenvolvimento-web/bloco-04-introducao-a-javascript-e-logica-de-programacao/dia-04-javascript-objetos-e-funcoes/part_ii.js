// function verifyPalindrome(word) {
//   let palindrome = '';
//   for (let index = word.length - 1; index >= 0; index -= 1) {
//     palindrome += word[index];
//   }
//   if (word === palindrome) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(verifyPalindrome('arara'));
// console.log(verifyPalindrome('desenvolvimento'));

// console.log('****************');

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

console.log('****************');

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