import React from 'react';
import './App.css';

// Exercise 03

// const Task = (value) => {
//   return <li>{value}</li>;
// };

// const tasks = ['Task 1', 'Task 2', 'Task 3'];

// class App extends React.Component {
//   render() {
//     return <ul>{tasks.map((task) => Task(task))}</ul>;
//   }
// }

// Exercise 04

import Card from './cards';

class App extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <Card
            featureImage="https://findocs.com.br/wp-content/uploads/2021/04/logo_findocs.png"
            title="FinDocs INT"
            description="Mais dinheiro e mais inteligência financeira, de uma vez por todas. Comece já com o INT!"
            link="https://findocs.com.br/"
          />
        </div>
        <div className="col-sm-4">
          <Card
            featureImage="https://findocs.com.br/wp-content/uploads/2021/04/logo_findocs.png"
            title="Uma biblioteca organizada, com conteúdo curado"
            description="Todas as obras da biblioteca FinDocs integraram a formação da nossa equipe em algum momento. Navegue e selecione a sua próxima leitura, dentro do seu contexto e dos seus próprios objetivos. A biblioteca é organizada por nível de complexidade, além de apresentar cada obra com um indicador de relevância."
            link="https://findocs.com.br/biblioteca/"
          />
        </div>
      </div>
    );
  }
}

export default App;
