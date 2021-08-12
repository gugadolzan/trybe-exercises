const sumNumbers = () => {
  const numbers = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50) + 1
  );

  const sum = numbers
    .map((number) => number * number) // Or use Math.pow() method to square a number
    .reduce((sum, number) => sum + number);

  if (sum < 8000) throw new Error();

  return sum;
};

const sumResult = (sum) =>
  [2, 3, 5, 10]
    .map((number) => sum / number)
    .reduce((sum, number) => sum + number);

const fetchPromise = async () => {
  try {
    const sum = await sumNumbers();
    const result = await sumResult(sum);
    console.log(result);
  } catch {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
};

fetchPromise();
