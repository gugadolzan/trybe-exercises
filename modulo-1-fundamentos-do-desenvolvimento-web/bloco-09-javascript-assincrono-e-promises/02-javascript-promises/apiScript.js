const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = { // myObject defines request type (method: 'GET') and response format (headers: { 'Accept': 'application/json' })
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject) // fetch function returns response object
    .then(response => console.log(response));
};

window.onload = () => fetchJoke();
