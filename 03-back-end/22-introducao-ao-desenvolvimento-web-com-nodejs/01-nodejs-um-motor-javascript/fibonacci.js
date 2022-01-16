const readline = require('readline-sync');

/**
 * Exibe o valor dos n primeiros elementos da sequência de fibonacci
 */
const fibonacci = () => {
  let numeros = readline.questionInt('Digite um número: ');

  while (numeros < 0) {
    console.log('Número inválido');
    numeros = readline.questionInt('Digite um número: ');
  }

  let sequencia = [0, 1];
  for (let i = 2; i < numeros; i += 1) {
    sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
  }

  console.log(sequencia.slice(1));
};

fibonacci();
