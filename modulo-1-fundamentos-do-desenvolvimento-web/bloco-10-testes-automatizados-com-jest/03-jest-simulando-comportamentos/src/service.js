// Exercises 01-03
const randomNumber = () => Math.floor(Math.random() * 101);

// Exercises 04-05
const toUpperCase = (str) => str.toUpperCase();

const firstChar = (str) => str[0];

const concatStrings = (str1, str2) => str1.concat(str2);

// Exercises 06
function fetchDog() {
  return fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

module.exports = {
  randomNumber,
  toUpperCase,
  firstChar,
  concatStrings,
  fetchDog,
};
