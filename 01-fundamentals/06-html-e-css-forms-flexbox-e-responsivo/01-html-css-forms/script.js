function fillStates() {
  const states = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
  ];
  const selectState = document.getElementById("state");
  for (let index = 0; index < states.length; index += 1) {
    let state = document.createElement("option");
    state.innerText = states[index];
    state.value = states[index];
    selectState.appendChild(state);
  }
}

const submitButton = document.getElementById("submit");

function handleSubmit(event) {
  event.preventDefault();

  // Data validation
  const name = document.querySelector("[name=name]");
  console.log(name.value.length);
  if (name.value.length > 40 || name.value.length === 0) {
    alert("Nome inválido");
  }
}

window.onload = () => {
  fillStates();
  submitButton.addEventListener("click", handleSubmit);
};

// function dateValidation() {
//   const date = document.getElementById("start-date").value;
//   let regexValidation = /^\d\d\/\d\d\/\d\d\d\d$/;
//   if (!regexValidation.test(date)) {
//     alert("Data de início: Formato inválido");
//     return false;
//   }
//   const dateArray = date.split("/");
//   if (dateArray[0] < 0 || dateArray[0] > 31) {
//     alert("Data de início: Dia inválido");
//     return false;
//   }
//   if (dateArray[1] < 0 || dateArray[1] > 12) {
//     alert("Data de início: Mês inválido");
//     return false;
//   }
//   if (dateArray[2] < 0) {
//     alert("Data de início: Ano inválido");
//     return false;
//   }
// }

// const submitButton = document.getElementById("submit");

// submitButton.addEventListener("click", dateValidation);

// const printForm = document.getElementById("print-form");

// submitButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   printForm.innerHTML = "";

//   for (let index = 0; index < 5; index += 1) {
//     printForm.innerHTML += document.getElementsByTagName("input")[index].value;
//     printForm.innerHTML += "<br>";
//   }
//   printForm.innerHTML += document.getElementById("resume").value;
//   printForm.innerHTML += "<br>";
//   // idk how to get state and house type values
//   for (let index = 7; index < 10; index += 1) {
//     printForm.innerHTML += document.getElementsByTagName("input")[index].value;
//     printForm.innerHTML += "<br>";
//   }
// });

// const resetButton = document.getElementById("reset");
// resetButton.addEventListener("click", () => {
//   printForm.innerHTML = "";
// });
