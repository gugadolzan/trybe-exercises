const service = require('../src/service');

// Exercises 01-03
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

// Exercises 04-05
jest.mock('../src/service');
// toUpperCase, firstChar, concatStrings
it('tests toUpperCase function', () => {
  service.toUpperCase.mockImplementation((str) => str.toLowerCase());

  expect(service.toUpperCase('UPPERCASE')).toBe('uppercase');
  expect(service.toUpperCase).toHaveBeenCalled();
  expect(service.toUpperCase).toHaveBeenCalledTimes(1);
  expect(service.toUpperCase).toHaveBeenCalledWith('UPPERCASE');
});

it('tests firstChar function', () => {
  service.firstChar.mockImplementation((str) => str[str.length - 1]);

  expect(service.firstChar('letter')).toBe('r');
  expect(service.firstChar).toHaveBeenCalled();
  expect(service.firstChar).toHaveBeenCalledTimes(1);
  expect(service.firstChar).toHaveBeenCalledWith('letter');
});

it('tests concatStrings function', () => {
  service.concatStrings.mockImplementation((str, str2, str3) =>
    str.concat(str2, str3)
  );

  expect(service.concatStrings('tr', 'y', 'be')).toBe('trybe');
  expect(service.concatStrings).toHaveBeenCalled();
  expect(service.concatStrings).toHaveBeenCalledTimes(1);
  expect(service.concatStrings).toHaveBeenCalledWith('tr', 'y', 'be');
});
