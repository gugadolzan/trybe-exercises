function mosRepeated(numbers) {
  let num = {};

  for (let index = 0; index < numbers.length; index += 1) { // faz a contagem de quantas vezes aparece e atribui à um objeto
    let value = numbers[index];
    if (num[value] === undefined) {
      num[value] = 1;
    } else {
      num[value] = num[value] + 1;
    }
  };

  let count = 0,
    output = 0;

  for (let key in num) { // verifica qual elemento do objeto possui a maior contagem
    if (num[key] > count) {
      count = num[key];
      output = key;
    }
  };

  return output;
}

console.log(mosRepeated([2, 3, 2, 5, 8, 2, 3]));