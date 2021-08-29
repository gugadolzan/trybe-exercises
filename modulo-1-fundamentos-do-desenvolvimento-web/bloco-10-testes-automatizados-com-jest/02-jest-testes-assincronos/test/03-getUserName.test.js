const getUserName = require('../src/02-03-getUserName');

describe('test getUserName function using async/await', () => {
  describe('when id exists', () => {
    it('should returns the user name', async () => {
      const data = await getUserName(1);
      expect(data).toEqual('Mark');
    });
  });

  describe('when id does not exists', () => {
    it('should returns an error', async () => {
      expect.assertions(1);
      try {
        await getUserName(3);
      } catch (error) {
        expect(error.message).toEqual('User with 3 not found.');
      }
    });
  });
});
