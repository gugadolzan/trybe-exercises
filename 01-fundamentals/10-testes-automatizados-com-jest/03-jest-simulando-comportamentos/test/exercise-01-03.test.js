const service = require('../src/service');

describe('tests randomNumber function', () => {
  // Exercise 01
  it('should return 10 - mock return', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);

    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  // Exercise 02
  it('should return 5 - mock implementation', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(service.randomNumber(10, 2)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
  });

  // Exercise 03
  describe('testing implementations', () => {
    it('should return multiplication of parameters - mock implementation', () => {
      service.randomNumber = jest
        .fn()
        .mockImplementation((a, b, c) => a * b * c);

      expect(service.randomNumber(2, 3, 4)).toBe(24);
      expect(service.randomNumber).toHaveBeenCalled();
      expect(service.randomNumber).toHaveBeenCalledTimes(1);
      expect(service.randomNumber).toHaveBeenCalledWith(2, 3, 4);
    });

    it('should return parameter doubled - mock implementation', () => {
      service.randomNumber.mockReset();
      expect(service.randomNumber).toHaveBeenCalledTimes(0);

      service.randomNumber.mockImplementation((a) => a * 2);

      expect(service.randomNumber(5)).toBe(10);
      expect(service.randomNumber).toHaveBeenCalled();
      expect(service.randomNumber).toHaveBeenCalledTimes(1);
      expect(service.randomNumber).toHaveBeenCalledWith(5);
    });
  });
});
