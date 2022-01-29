const fs = require('fs').promises;

const fileName = 'simpsons.json';

/**
 * @description Lê todos os dados do arquivo e imprime cada personagem no formato id - Nome
 */
const logCharacters = async () => {
  try {
    const fileContent = await fs.readFile(fileName);
    const characters = JSON.parse(fileContent);

    characters.forEach(({ id, name }) => console.log(`${id} - ${name}`));
  } catch (err) {
    console.error(err);
  }
};
