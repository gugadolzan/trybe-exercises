let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// ================> exercise 1 <================
// for (let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// };

// or just
// console.log(numbers);

// ================> exercise 2 <================
// let sum = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   sum = sum + numbers[index];
// };

// console.log(sum);

// ================> exercise 3 <================
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum = sum + numbers[index];
};

let average = sum / numbers.length;

console.log(average);