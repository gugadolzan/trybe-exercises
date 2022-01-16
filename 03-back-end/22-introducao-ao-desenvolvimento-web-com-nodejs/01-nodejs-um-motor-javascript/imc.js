const readline = require('readline-sync');

/**
 * @description Retorna a situação do IMC
 * @param {number} imc
 * @returns {string}
 */
const situacaoIMC = (imc) => {
  if (imc < 18.5) return 'Abaixo do peso (magreza)';

  if (imc >= 18.5 && imc < 25) return 'Peso normal';

  if (imc >= 25 && imc < 30) return 'Acima do peso (sobrepeso)';

  if (imc >= 30 && imc < 35) return 'Obesidade grau I';

  if (imc >= 35 && imc < 40) return 'Obesidade grau II';

  return 'Obesidade graus III e IV';
};

/**
 * Calcula o IMC e retorna a situação
 */
const calculaIMC = () => {
  const peso = readline.questionFloat('Qual seu peso? ');
  const altura = readline.questionFloat('Qual sua altura? ');

  console.log(`Peso: ${peso} Kg`);
  console.log(`Altura: ${altura} m`);

  const imc = (peso / (altura * altura)).toFixed(2);

  console.log(`IMC: ${imc}`);
  console.log(`Situação: ${situacaoIMC(Number(imc))}`);

  return;
};

calculaIMC();
