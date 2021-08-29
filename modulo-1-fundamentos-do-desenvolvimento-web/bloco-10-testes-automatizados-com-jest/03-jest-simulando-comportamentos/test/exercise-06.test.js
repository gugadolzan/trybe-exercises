const service = require('../src/service');

describe('tests fetchDog function', () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

  it('should return promise resolved', async () => {
    service.fetchDog.mockResolvedValue('request sucess');

    service.fetchDog();
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    await expect(service.fetchDog()).resolves.toBe('request sucess');
    expect(service.fetchDog).toHaveBeenCalledTimes(2);
  });

  it('should return promise rejected', async () => {
    service.fetchDog.mockRejectedValue('request failed');

    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    await expect(service.fetchDog()).rejects.toMatch('request failed');
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  });
});
