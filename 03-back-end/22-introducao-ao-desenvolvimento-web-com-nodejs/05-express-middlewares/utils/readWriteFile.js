const fs = require('fs').promises;

const readFileContent = async (path) => {
  try {
    const content = await fs.readFile(path, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
};

const writeFileContent = async (path, content) => {
  try {
    await fs.writeFile(path, JSON.stringify(content));
  } catch (error) {
    return null;
  }
};

module.exports = {
  readFileContent,
  writeFileContent,
};
