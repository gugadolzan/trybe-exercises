const fs = require('fs').promises;

const FILE_NAME = 'simpsons.json';

async function readSimpsons() {
  const data = await fs.readFile(FILE_NAME, 'utf8');
  return JSON.parse(data);
}

async function writeSimpsons(data) {
  await fs.writeFile(FILE_NAME, JSON.stringify(data));
}

module.exports = { readSimpsons, writeSimpsons };
