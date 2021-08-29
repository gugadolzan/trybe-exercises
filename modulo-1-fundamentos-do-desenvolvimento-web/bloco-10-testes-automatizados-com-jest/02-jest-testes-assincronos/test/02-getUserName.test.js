const getUserName = require('../src/02-03-getUserName');

describe('test getUserName function', () => {
  describe('when id exists', () => {
    it('should return the user name', () =>
      getUserName(1).then((data) => expect(data).toEqual('Mark')));
      // returning a promise
  });

  describe('when id does not exists', () => {
    it('should return an error', () => {
      expect.assertions(1);
      return getUserName(3).catch((error) =>
        expect(error.message).toMatch('User with 3 not found.')
      );
    });
  });
});
