function fillStates() {
  const states = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins',
  ];
  const selectState = document.getElementById('state');
  for (let index = 0; index < states.length; index += 1) {
    let state = document.createElement('option');
    state.innerText = states[index];
    state.value = states[index];
    selectState.appendChild(state);
  }
}
fillStates();

const submitButton = document.getElementById('submit');

const printForm = document.getElementById('print-form');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  printForm.innerHTML = '';

  for (let index = 0; index < 5; index += 1) {
    printForm.innerHTML += document.getElementsByTagName('input')[index].value;
    printForm.innerHTML += '<br>';
  }
  printForm.innerHTML += document.getElementById('resume').value;
  printForm.innerHTML += '<br>';

  for (let index = 7; index < 10; index += 1) {
    printForm.innerHTML += document.getElementsByTagName('input')[index].value;
    printForm.innerHTML += '<br>';
  }
});

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
  printForm.innerHTML = '';
});

var picker = new Pikaday({
  field: document.getElementById('start-date'),
});
