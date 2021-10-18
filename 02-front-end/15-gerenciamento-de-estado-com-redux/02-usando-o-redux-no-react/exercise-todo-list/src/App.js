import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import FilterButtons from './components/FilterButtons';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';

const App = () => (
  <Provider store={store}>
    <InputTodo />
    <FilterButtons />
    <TodoList />
  </Provider>
);

export default App;
