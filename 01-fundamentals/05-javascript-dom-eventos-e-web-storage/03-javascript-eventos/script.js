function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1:

// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

// - Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>

// - Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>

// - Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function setDaysOfTheMonth() {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = document.createElement('li');

    day.innerText = dezDaysList[index];
    day.classList.add('day');

    document.getElementById('days').appendChild(day);

    if (
      dezDaysList[index] === 24 ||
      dezDaysList[index] === 25 ||
      dezDaysList[index] === 31
    ) {
      day.classList.add('holiday');
    }

    if (
      dezDaysList[index] === 4 ||
      dezDaysList[index] === 11 ||
      dezDaysList[index] === 18 ||
      dezDaysList[index] === 25
    ) {
      day.classList.add('friday');
    }
  }
}
setDaysOfTheMonth();

// Exercício 2:

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

// - Adicione a este botão a ID "btn-holiday".

// - Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function createHolidayButton(buttonName) {
  let holidayButton = document.createElement('button');

  holidayButton.innerText = buttonName;
  holidayButton.setAttribute('id', 'btn-holiday');

  document.querySelector('.buttons-container').appendChild(holidayButton);
}
createHolidayButton('Feriados');

// Exercício 3:

// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".

// - É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

function changeHolidaysBackgroundColor() {
  document.getElementById('btn-holiday').addEventListener('click', function () {
    let holidayDays = document.getElementsByClassName('holiday');

    for (let index = 0; index < holidayDays.length; index += 1) {
      if (holidayDays[index].style.backgroundColor !== 'white') {
        holidayDays[index].style.backgroundColor = 'white';
      } else {
        holidayDays[index].style.backgroundColor = 'rgb(238,238,238)';
      }
    }
  });
}
changeHolidaysBackgroundColor();

//Exercício 4:

// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

// - Adicione a este botão o ID "btn-friday".

// - Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function createFridayButton(buttonName) {
  let fridayButton = document.createElement('button');

  fridayButton.innerText = buttonName;
  fridayButton.setAttribute('id', 'btn-friday');

  document.querySelector('.buttons-container').appendChild(fridayButton);
}
createFridayButton('Sexta-feira');

// Exercício 5:

// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

// - É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

const fridayDayNumbers = [4, 11, 18, 25];

function changeFridaysText() {
  document.getElementById('btn-friday').addEventListener('click', function () {
    let fridayDays = document.getElementsByClassName('friday');

    for (let index = 0; index < fridayDays.length; index += 1) {
      if (fridayDays[index].innerText !== "IT'S FRIDAY THEN") {
        fridayDays[index].innerText = "IT'S FRIDAY THEN";
      } else {
        fridayDays[index].innerText = fridayDayNumbers[index];
      }
    }
  });
}
changeFridaysText();

// Exercício 6:

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// - Dica - Propriedade: event.target.

function zoomIn() {
  let days = document.getElementById('days');

  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
  });
}
zoomIn();

function zoomOut() {
  let days = document.getElementById('days');

  days.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
  });
}
zoomOut();

// Exercício 7:

// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

// - O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function addTask(task) {
  let taskItem = document.createElement('span');

  taskItem.innerText = task;

  document.querySelector('.my-tasks').appendChild(taskItem);
}
addTask('Estudar!');

// Exercício 8:

// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.

// - O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.

// - O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function addTaskSubtitle(color) {
  let taskSubtitle = document.createElement('div');

  taskSubtitle.classList.add('task');
  taskSubtitle.style.backgroundColor = color;

  document.querySelector('.my-tasks').appendChild(taskSubtitle);
}
addTaskSubtitle('red');

// Exercício 9:

// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected, ela estará selecionada.

// - Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function taskDone() {
  let task = document.querySelector('.task');

  task.addEventListener('click', function (event) {
    if (task.className === 'task') {
      event.target.className = 'task selected';
      event.target.style.backgroundColor = 'green';
    } else {
      event.target.className = 'task';
      event.target.style.backgroundColor = 'red';
    }
  });
}
taskDone();

// Exercício 10:

// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.

// - Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).

function changeDayColor() {
  let days = document.getElementById('days');
  let color = document.querySelector('.task').style.backgroundColor;

  days.addEventListener('click', function (event) {
    if (event.target.style.color !== color) {
      event.target.style.color = color;
    } else {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
}
changeDayColor();

// Bônus:

// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".

// - Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".

// - Ao pressionar a tecla "enter" o evento também deverá ser disparado.

// - Dica - Propriedade: keyCode.

function addAppointment() {
  let input = document.getElementById('task-input');
  let appointmentButton = document.getElementById('btn-add');
  let appointmentList = document.querySelector('.input-container');

  appointmentButton.addEventListener('click', function () {
    if (!input.value) {
      alert('ERRO: Insira ao menos 1 caractere');
    } else {
      let appointmentItem = document.createElement('li');

      appointmentItem.innerText = input.value;
      appointmentList.appendChild(appointmentItem);

      input.value = '';
    }
  });

  input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13 && input.value.length > 0) {
      let appointmentItem = document.createElement('li');

      appointmentItem.innerText = input.value;
      appointmentList.appendChild(appointmentItem);

      input.value = '';
    }
  });
}

addAppointment();
