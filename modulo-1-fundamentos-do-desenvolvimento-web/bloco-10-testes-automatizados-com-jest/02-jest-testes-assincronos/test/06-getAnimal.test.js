const {
  findAnimalsByType,
  findAnimalByName,
  findAnimalByAge,
} = require('../src/06-getAnimal');

describe('tests findAnimalsByType function', () => {
  describe('when animal type exists', () => {
    it('should return animal list', () =>
      findAnimalsByType('Dog').then((listDogs) => {
        expect(listDogs[0].name).toEqual('Dorminhoco');
        expect(listDogs[1].name).toEqual('Soneca');
      }));
  });

  describe('when animal type does not exists', () => {
    it('should return an error', () => {
      expect.assertions(1);
      return findAnimalsByType('Lion').catch((error) =>
        expect(error.message).toMatch('Não possui esse tipo de animal.')
      );
    });
  });
});

describe('tests findAnimalByName function', () => {
  describe('when animal name exists', () => {
    it('should return the animal object', () =>
      findAnimalByName('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      }));
  });

  describe('when animal name does not exists', () => {
    it('should return an error', () => {
      expect.assertions(1);
      return findAnimalByName('Bob').catch((error) => {
        expect(error.message).toEqual('Nenhum animal com esse nome!');
      });
    });
  });
});

describe('tests findAnimalByAge function', () => {
  describe('when animal age exists', () => {
    it('should return animal list', () => {
      const animals = [{ name: 'Preguiça', age: 5, type: 'Cat' }];
      return expect(findAnimalByAge(5)).resolves.toEqual(animals);
    });
  });

  describe('when animal age does not exists', () => {
    it('should return an error', () => {
      expect.assertions(1);
      return expect(findAnimalByAge(3)).rejects.toEqual(
        new Error('Nenhum animal encontrado!')
      );
    });
  });
});
