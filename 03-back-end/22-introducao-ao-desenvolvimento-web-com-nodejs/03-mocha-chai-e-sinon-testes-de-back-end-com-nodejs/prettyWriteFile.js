const fs = require('fs').promises;

module.exports = async (fileName, fileContent) => {
  await fs.writeFile(`${__dirname}/${fileName}`, fileContent);

  return 'ok';
};
