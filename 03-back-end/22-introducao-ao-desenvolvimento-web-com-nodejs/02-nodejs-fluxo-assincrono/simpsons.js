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

/**
 * @description Recebe o id de um personagem como parâmetro e retorna uma Promise que é resolvida com os dados do personagem que possui o id informado
 * @param {number} id
 * @returns {Promise}
 */
const getCharacterById = async (id) => {
  try {
    const fileContent = await fs.readFile(fileName);
    const characters = JSON.parse(fileContent);
    const character = characters.find(
      ({ id: characterId }) => characterId === String(id)
    );

    /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
     * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
     * tendo como motivo o que passarmos para o `throw`.
     * Ou seja, a linha abaixo rejeita a Promise da nossa função com o motivo 'id não encontrado'
     */
    if (!character) throw new Error('id não encontrado');

    /* Da mesma forma que `throw` aciona o fluxo de erro e rejeita a Promise,
     * `return` aciona o fluxo de sucesso e resolve a Promise.
     * Sendo assim, a linha abaixo é equivalente a chamar `resolve(chosenSimpson)`
     * dentro do executor de uma Promise.
     */
    return character;

    /* Alternative
    if (!character) return Promise.reject('id não encontrado');

    return Promise.resolve(character);
    */
  } catch (err) {
    console.error(err);
  }
};

/**
 * @description Altera o arquivo e retira os personagens com id 10 e 6.
 */
const removeCharacters = async () => {
  try {
    const fileContent = await fs.readFile(fileName);
    const characters = JSON.parse(fileContent);
    const newCharacters = characters.filter(
      ({ id }) => id !== '10' && id !== '6'
    );

    fs.writeFile(fileName, JSON.stringify(newCharacters));
  } catch (err) {
    console.error(err);
  }
};
