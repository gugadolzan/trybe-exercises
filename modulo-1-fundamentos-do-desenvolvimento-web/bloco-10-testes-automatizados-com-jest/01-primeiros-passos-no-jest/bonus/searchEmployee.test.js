const searchEmployee = require('./searchEmployee');

describe('Testa a função searchEmployee', () => {
  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
    expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
  });

  it('Testa se searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
    expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
  });

  it('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
    expect(searchEmployee('1256-4', 'specialities')).toContain(
      'Hooks',
      'Context API',
      'Tailwind CSS'
    );
  });

  it('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
    expect(() => {
      searchEmployee('1256-8', 'specialities');
    }).toThrow();
  });

  it('Testa a mensagem do erro para ID inexistente', () => {
    expect(() => {
      searchEmployee('1256-8', 'specialities');
    }).toThrowError(new Error('ID não identificada'));
  });

  it('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
    expect(() => {
      searchEmployee();
    }).toThrow();
  });

  it('Testa a mensagem do erro para informação inexistente', () => {
    expect(() => {
      searchEmployee('4678-2', 'shift');
    }).toThrowError(new Error('Informação indisponível'));
  });
});
