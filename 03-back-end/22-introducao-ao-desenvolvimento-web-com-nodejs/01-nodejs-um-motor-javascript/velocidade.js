const readline = require('readline-sync');

/**
 * Calcula a velocidade média
 */
const velocidadeMedia = () => {
  const distancia = readline.questionInt('Qual a distância percorrida (em metros)? ');
  const tempo = readline.questionInt('Qual o tempo gasto (em segundos)? ');

  const velocidadeMedia = distancia / tempo;

  console.log(`Velocidade média: ${velocidadeMedia.toFixed(2)} m/s`);
  return;
};

velocidadeMedia();
