// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// ================> exercise 1 <================
// for (let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// };

// or just
// console.log(numbers);
// ==============================================




// ================> exercise 2 <================
// let sum = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   sum = sum + numbers[index];
// };

// console.log(sum);
// ==============================================




// ================> exercise 3 <================
// let sum = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   sum = sum + numbers[index];average
// ==============================================




// ================> exercise 4 <================
// let sum = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   sum = sum + numbers[index];
// };

// let average = sum / numbers.length;

// if (average > 20) {
//   console.log('result higher than 20');
// } else {
//   console.log('result lower than 20');
// };
// ==============================================




// ================> exercise 5 <================
// let higher = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] > higher) {
//     higher = numbers[index];
//   };
// };

// console.log(higher);
// ==============================================




// ================> exercise 6 <================
// let oddNumbers = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     oddNumbers += 1;
//   };
// };

// if (oddNumbers === 0) {
//   console.log('there are not odd numbers');
// } else {
//   console.log('there are ' + oddNumbers + ' odd numbers');
// };
// ==============================================




// ================> exercise 7 <================
// let lower = numbers[0];

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] < lower) {
//     lower = numbers[index];
//   };
// };

// console.log(lower);
// ==============================================




// ================> exercise 8 <================
// let array = []

// for (let index = 0; index < 25; index += 1) {
//   array.push(index + 1);
// }

// console.log(array);
// ==============================================




// ================> exercise 9 <================
// for (let index = 0; index < array.length; index += 1) {
//   console.log(array[index] / 2);
// }
// ==============================================




// ================> bonus <================
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] < numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// console.log('exercise 1: ' + numbers);

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] > numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// console.log('exercise 2: ' + numbers);

// let numbersNew = [];
// for (let index = 0; index < numbers.length; index += 1) {
//   if (index + 1 < numbers.length) {
//     numbersNew.push(numbers[index] * numbers[index + 1]);
//   } else {
//     numbersNew.push(numbers[index] * 2);
//   };
// }

// console.log('exercise 3: ' + numbersNew);