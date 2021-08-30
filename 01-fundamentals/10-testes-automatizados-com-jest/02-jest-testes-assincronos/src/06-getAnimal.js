const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);

      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject(new Error('Não possui esse tipo de animal.'));
    }, 100);
  });

const findAnimalByName = (name) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Animals.find((animal) => animal.name === name);

      if (result) {
        return resolve(result);
      }

      return reject(new Error('Nenhum animal com esse nome!'));
    }, 100);
  });

const findAnimalByAge = (age) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const listAnimals = Animals.filter((animal) => animal.age === age);

      if (listAnimals.length > 0) {
        return resolve(listAnimals);
      }

      return reject(new Error('Nenhum animal encontrado!'));
    }, 100);
  });

module.exports = { findAnimalsByType, findAnimalByName, findAnimalByAge };
