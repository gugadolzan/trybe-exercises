import React from 'react';
import './App.css';

const Task = (value) => {
  return <li>{value}</li>;
};

const tasks = ['Task 1', 'Task 2', 'Task 3'];

class App extends React.Component {
  render() {
    return <ul>{tasks.map((task) => Task(task))}</ul>;
  }
}

export default App;
