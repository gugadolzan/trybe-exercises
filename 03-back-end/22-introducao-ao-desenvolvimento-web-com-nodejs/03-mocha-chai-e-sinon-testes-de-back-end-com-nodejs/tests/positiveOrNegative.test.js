const { expect } = require('chai');

const positiveOrNegative = require('../positiveOrNegative');

describe('Test function positiveOrNegative', () => {
  describe('when the parameter number is greater than zero', () => {
    describe('the return', () => {
      it('should be a string', () => {
        const result = positiveOrNegative(1);

        expect(result).to.be.a('string');
      });

      it('should be "positive"', () => {
        const result = positiveOrNegative(1);

        expect(result).to.equal('positive');
      });
    });
  });

  describe('when the parameter number is less than zero', () => {
    describe('the return', () => {
      it('should be a string', () => {
        const result = positiveOrNegative(-1);

        expect(result).to.be.a('string');
      });
      it('should be "negative"', () => {
        const result = positiveOrNegative(-1);

        expect(result).to.equal('negative');
      });
    });
  });

  describe('when the parameter number is zero', () => {
    describe('the return', () => {
      it('should be a string', () => {
        const result = positiveOrNegative(0);

        expect(result).to.be.a('string');
      });
      it('should be "neutral"', () => {
        const result = positiveOrNegative(0);

        expect(result).to.equal('neutral');
      });
    });
  });

  describe('when the parameter number is not a number', () => {
    describe('the return', () => {
      it('should be a string', () => {
        const result = positiveOrNegative('1');

        expect(result).to.be.a('string');
      });
      it('should be "value must be a number"', () => {
        const result = positiveOrNegative('1');

        expect(result).to.equal('value must be a number');
      });
    });
  });
});
