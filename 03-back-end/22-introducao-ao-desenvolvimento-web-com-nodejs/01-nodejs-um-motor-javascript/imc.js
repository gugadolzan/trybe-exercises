const calculaIMC = (peso, altura) => {
  console.log(`Peso: ${peso} Kg`);
  console.log(`Altura: ${altura} m`);

  const imc = (peso / (altura * altura)).toFixed(2);

  console.log(`IMC: ${imc}`);

  return;
};

calculaIMC(80, 1.8);
