const sum = require('../src/sum');

describe('sum(a, b) returns the sum of parameter a and b', () => {
  it('should return 9 sum(4,5)', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('should return 0 when sum(0,0)', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it("should throw an error when the parameters are 4 and '5' (string 5)", () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  it("should error message be 'parameters must be numbers' when calling sum(4, '5')", () => {
    expect(() => {
      sum('4', 5);
    }).toThrowError(new Error('parameters must be numbers'));
  });
});
