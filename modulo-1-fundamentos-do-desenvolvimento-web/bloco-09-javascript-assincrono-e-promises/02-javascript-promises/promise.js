const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const numbers = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );

    const sum = numbers
      .map((number) => number * number) // Or use Math.pow() method to square a number
      .reduce((sum, number) => (sum += number));

    sum < 8000 ? resolve(sum) : reject(sum);
  });

  promise
    .then((result) => [2, 3, 5, 10].map((number) => result / number))
    .catch(() => console.log('Promise rejeitada'));
};

fetchPromise();
