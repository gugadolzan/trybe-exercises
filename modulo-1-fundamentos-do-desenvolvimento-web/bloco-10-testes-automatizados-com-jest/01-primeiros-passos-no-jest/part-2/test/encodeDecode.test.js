const { encode, decode } = require('../js/encodeDecode');

describe('Testa as funções encode e decode', () => {
  it('Teste se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('a')).toBe('1');
    expect(encode('e')).toBe('2');
    expect(encode('i')).toBe('3');
    expect(encode('o')).toBe('4');
    expect(encode('u')).toBe('5');
  });

  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('1')).toBe('a');
    expect(decode('2')).toBe('e');
    expect(decode('3')).toBe('i');
    expect(decode('4')).toBe('o');
    expect(decode('5')).toBe('u');
  });

  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('b')).toBe('b');
    expect(encode('c')).toBe('c');
    expect(encode('d')).toBe('d');
    expect(encode('f')).toBe('f');
    expect(encode('g')).toBe('g');
    expect(encode('h')).toBe('h');
    expect(encode('j')).toBe('j');
    expect(encode('k')).toBe('k');
    expect(encode('l')).toBe('l');
    expect(encode('m')).toBe('m');
    expect(encode('n')).toBe('n');
    expect(encode('p')).toBe('p');
    expect(encode('q')).toBe('q');
    expect(encode('r')).toBe('r');
    expect(encode('s')).toBe('s');
    expect(encode('t')).toBe('t');
    expect(encode('v')).toBe('v');
    expect(encode('w')).toBe('w');
    expect(encode('x')).toBe('x');
    expect(encode('y')).toBe('y');
    expect(encode('z')).toBe('z');
    expect(encode('0')).toBe('0');
    expect(decode('6')).toBe('6');
    expect(decode('7')).toBe('7');
    expect(decode('8')).toBe('8');
    expect(decode('9')).toBe('9');
  });

  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('abc').length).toBe(3);
    expect(decode('123').length).toBe(3);
  });
});
