import './node_modules/just-validate/dist/js/just-validate.js';

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

// Previous exercise

// const submitButton = document.getElementById('submit');

// const printForm = document.getElementById('print-form');

// submitButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   printForm.innerHTML = '';

//   for (let index = 0; index < 5; index += 1) {
//     printForm.innerHTML += document.getElementsByTagName('input')[index].value;
//     printForm.innerHTML += '<br>';
//   }
//   printForm.innerHTML += document.getElementById('resume').value;
//   printForm.innerHTML += '<br>';

//   for (let index = 7; index < 10; index += 1) {
//     printForm.innerHTML += document.getElementsByTagName('input')[index].value;
//     printForm.innerHTML += '<br>';
//   }
// });

// const resetButton = document.getElementById('reset');
// resetButton.addEventListener('click', () => {
//   printForm.innerHTML = '';
// });

var picker = new Pikaday({
  field: document.getElementById('start_date'),
});

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 40,
    },
    email: {
      required: true,
      email: true,
      maxLength: 50,
    },
    cpf: {
      required: true,
      maxLength: 11,
    },
    address: {
      required: true,
      maxLength: 200,
    },
    city: {
      required: true,
      maxLength: 28,
    },
    state: {
      required: true,
    },
    addres_type: {
      required: true,
    },
    resume: {
      required: true,
      maxLength: 1000,
    },
    job_title: {
      required: true,
      maxLength: 40,
    },
    job_description: {
      required: true,
      maxLength: 500,
    },
    start_date: {
      required: true,
    },
  },
  messages: {
    name: {
      required: 'O campo de nome é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.',
    },
    email: {
      required: 'O campo de email é obrigatório.',
      email: 'O email digitado não é válido.',
      maxLength: 'O limite é de 50 caracteres.',
    },
    cpf: {
      required: 'O campo de CPF é obrigatório.',
      maxLength: 'O limite é de 11 caracteres.',
    },
    address: {
      required: 'O campo endereço é obrigatório.',
      maxLength: 'O limite é de 200 caracteres.',
    },
    city: {
      required: 'O campo cidade é obrigatório.',
      maxLength: 'O limite é de 28 caracteres.',
    },
    state: {
      required: 'O campo estado é obrigatório.',
    },
    addres_type: {
      required: 'A escolha de um item é obrigatória.',
    },
    resume: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 1000 caracteres.',
    },
    job_title: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.',
    },
    job_description: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 500 caracteres.',
    },
    start_date: {
      required: 'Este campo é obrigatório.',
    },
  },
  submitHandler: function (form, values) {
    console.log(form, values);
  },
});

window.onload = fillStates;
