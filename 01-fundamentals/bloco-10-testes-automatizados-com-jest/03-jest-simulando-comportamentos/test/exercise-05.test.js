const service = require('../src/service');

describe('tests toUpperCase function', () => {
  it('should return string lowercased', () => {
    const first = jest
      .spyOn(service, 'toUpperCase')
      .mockImplementation((str) => str.toLowerCase());

    expect(first('UPPERCASE')).toBe('uppercase');
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith('UPPERCASE');

    service.toUpperCase.mockRestore();

    expect(service.toUpperCase('lowercase')).toBe('LOWERCASE');
  });
});
