const readline = require('readline-sync');

/**
 * @description Calcula fatorial
 */
const fatorial = () => {
  let numero = readline.questionInt('Digite um número: ');
  let fat = 1;

  while (numero < 0) {
    console.log('Número inválido');
    numero = readline.questionInt('Digite um número: ');
  }

  for (let i = numero; i > 1; i -= 1) fat *= i;

  console.log(`O fatorial de ${numero} é ${fat}`);
};

fatorial();
