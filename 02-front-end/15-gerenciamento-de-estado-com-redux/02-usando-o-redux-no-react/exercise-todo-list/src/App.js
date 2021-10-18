import React from 'react';
import FilterButtons from './components/FilterButtons';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';

const App = () => (
  <div className="App">
    <InputTodo />
    <FilterButtons />
    <TodoList />
  </div>
);

export default App;
