const readline = require('readline-sync');

/**
 * @description Pergunta qual script deve ser executado ao usuário e executa o mesmo
 */
const main = () => {
  console.log('Escolha um script para ser executado:');

  const scripts = Object.keys(require('./package.json').scripts).filter(
    (script) => script !== 'test'
  );
  scripts.forEach((script, index) => {
    console.log(`${index + 1} - ${script}`);
  });

  const scriptSelecionado = readline.questionInt('Digite o número do script: ');

  const script = scripts[scriptSelecionado - 1];

  console.log(`Executando script ${script}`);

  require(`./${script}`);
};

main();
