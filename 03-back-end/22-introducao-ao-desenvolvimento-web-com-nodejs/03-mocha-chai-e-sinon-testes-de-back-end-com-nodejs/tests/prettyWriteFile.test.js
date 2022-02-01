const { expect } = require('chai');

const prettyWriteFile = require('../prettyWriteFile');

const FILE_NAME = 'myFile.txt';
const FILE_CONTENT = 'Hello World';

describe('Test function prettyWriteFile', () => {
  describe('the return', () => {
    it('should be a string', () => {
      const result = prettyWriteFile(FILE_NAME, FILE_CONTENT);

      expect(result).to.be.a('string');
    });

    it('should be "ok"', () => {
      const result = prettyWriteFile(FILE_NAME, FILE_CONTENT);

      expect(result).to.equals(FILE_CONTENT);
    });
  });
});
