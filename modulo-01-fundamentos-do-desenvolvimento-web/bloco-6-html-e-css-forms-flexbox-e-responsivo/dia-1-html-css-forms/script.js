function fillStates() {
  const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  const selectState = document.getElementById('state');
  for (let index = 0; index < states.length; index += 1) {
    let state = document.createElement('option');
    state.innerText = states[index];
    selectState.appendChild(state);
  }
}
fillStates();

function dateValidation() {
  const date = document.getElementById('start-date').value;
  let regexValidation = /^\d\d\/\d\d\/\d\d\d\d$/;
  if (!regexValidation.test(date)) {
    alert('Data de início: Formato inválido');
  }
  const dateArray = date.split('/');
  if (dateArray[0] < 0 || dateArray[0] > 31) {
    alert('Data de início: Dia inválido');
  }
  if (dateArray[1] < 0 || dateArray[1] > 12) {
    alert('Data de início: Mês inválido');
  }
  if (dateArray[2] < 0) {
    alert('Data de início: Ano inválido');
  }
}
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', dateValidation);

const printForm = document.getElementById('print-form');
submitButton.addEventListener('click', (event) => { // Not ok this function
  event.preventDefault();
  for (let index = 0; index < document.getElementsByTagName('input').length - 1; index += 1) {
    printForm.innerHTML += document.getElementsByTagName('input')[index].value;
    printForm.innerHTML += '<br>';
  }
});