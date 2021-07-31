let number = 19,
  divisor = 0;

for (let index = 0; index <= number; index += 1) {
  if (number % index === 0) {
    divisor += 1;
  };
}
if (divisor === 2) {
  console.log(number + ' is an odd number');
} else {
  console.log(number + ' is NOT an odd number');
};