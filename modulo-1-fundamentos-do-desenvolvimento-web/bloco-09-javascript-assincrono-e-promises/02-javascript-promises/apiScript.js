const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    // myObject defines request type (method: 'GET') and response format (headers: { 'Accept': 'application/json' })
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject) // fetch function returns response object
    .then((response) => response.json()) // .json() converts the contents of the body into a JSON return
    // .then(data => console.log(data));
    .then(({ joke }) => {
      document.getElementById('jokeContainer').innerHTML = joke;
    });
};

window.onload = () => fetchJoke();
