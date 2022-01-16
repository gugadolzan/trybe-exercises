const readline = require('readline-sync');

/**
 * @description Jogo de adivinhação
 */
const sorteio = () => {
  const numero = readline.questionInt('Digite um número entre 1 e 10: ');
  const numeroSorteado = Math.floor(Math.random() * 10) + 1;

  const resultado =
    numero === numeroSorteado
      ? 'Parabéns, número correto!'
      : `Opa, não foi dessa vez. O número era ${numeroSorteado}`;

  console.log(resultado);

  const continuar = readline.question(
    'Deseja continuar? (Digite s para sim, e qualquer outra coisa para não) '
  );

  if (continuar !== 's') return;

  sorteio();
};

sorteio();
