const service = require('../src/service');
jest.mock('../src/service');

test('tests toUpperCase function', () => {
  service.toUpperCase.mockImplementation((str) => str.toLowerCase());

  expect(service.toUpperCase('UPPERCASE')).toBe('uppercase');
  expect(service.toUpperCase).toHaveBeenCalled();
  expect(service.toUpperCase).toHaveBeenCalledTimes(1);
  expect(service.toUpperCase).toHaveBeenCalledWith('UPPERCASE');
});

test('tests firstChar function', () => {
  service.firstChar.mockImplementation((str) => str[str.length - 1]);

  expect(service.firstChar('letter')).toBe('r');
  expect(service.firstChar).toHaveBeenCalled();
  expect(service.firstChar).toHaveBeenCalledTimes(1);
  expect(service.firstChar).toHaveBeenCalledWith('letter');
});

test('tests concatStrings function', () => {
  service.concatStrings.mockImplementation((str, str2, str3) =>
    str.concat(str2, str3)
  );

  expect(service.concatStrings('tr', 'y', 'be')).toBe('trybe');
  expect(service.concatStrings).toHaveBeenCalled();
  expect(service.concatStrings).toHaveBeenCalledTimes(1);
  expect(service.concatStrings).toHaveBeenCalledWith('tr', 'y', 'be');
});
