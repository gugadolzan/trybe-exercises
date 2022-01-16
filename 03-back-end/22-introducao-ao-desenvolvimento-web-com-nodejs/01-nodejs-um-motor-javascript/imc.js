const readline = require("readline-sync");

const calculaIMC = () => {
  const peso = readline.question("Qual seu peso? ");
  const altura = readline.question("Qual sua altura? ");

  console.log(`Peso: ${peso} Kg`);
  console.log(`Altura: ${altura} m`);

  const imc = (peso / (altura * altura)).toFixed(2);

  console.log(`IMC: ${imc}`);

  return;
};

calculaIMC();
