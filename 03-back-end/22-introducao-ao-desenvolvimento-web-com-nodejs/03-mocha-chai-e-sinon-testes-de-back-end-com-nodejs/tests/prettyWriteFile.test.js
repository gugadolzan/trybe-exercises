const { expect } = require('chai');
const fs = require('fs').promises;
const sinon = require('sinon');

const prettyWriteFile = require('../prettyWriteFile');

const FILE_NAME = 'myFile.txt';
const FILE_CONTENT = 'Hello World';

describe('Test function prettyWriteFile', () => {
  before(() => {
    sinon.stub(fs, 'writeFile').resolves();
  });

  after(() => {
    fs.writeFile.restore();
  });

  describe('the return', () => {
    it('should be a string', async () => {
      const result = await prettyWriteFile(FILE_NAME, FILE_CONTENT);

      expect(result).to.be.a('string');
    });

    it('should be "ok"', async () => {
      const result = await prettyWriteFile(FILE_NAME, FILE_CONTENT);

      expect(result).to.equals('ok');
    });
  });
});
