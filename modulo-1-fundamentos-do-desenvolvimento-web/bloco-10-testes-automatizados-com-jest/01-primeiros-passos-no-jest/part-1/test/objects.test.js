const { obj1, obj2, obj3 } = require('../src/objects');

describe('Compare dois objetos para verificar se são idênticos ou não', () => {
  it('obj1 e obj2 são idênticos', () => {
    expect(obj1).toEqual(obj2);
  });

  it('obj1 e obj3 não são idênticos', () => {
    expect(obj1).not.toEqual(obj3);
  });

  it('obj2 e obj3 não são idênticos', () => {
    expect(obj2).not.toEqual(obj3);
  });
});
