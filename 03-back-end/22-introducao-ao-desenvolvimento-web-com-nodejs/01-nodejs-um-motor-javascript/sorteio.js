const readline = require('readline-sync');

/**
 * @description Função que gera um número aleatório entre 0 e 10 e retorna o resultado
 */
const sorteio = () => {
  const numero = readline.questionInt('Digite um número entre 1 e 10: ');
  const numeroSorteado = Math.floor(Math.random() * 10) + 1;

  const resultado =
    numero === numeroSorteado
      ? 'Parabéns, número correto!'
      : `Opa, não foi dessa vez. O número era ${numeroSorteado}`;

  console.log(resultado);

  const continuar = readline.question('Deseja continuar? (s/n) ');
  if (continuar !== 's') return;

  sorteio();
};

sorteio();
