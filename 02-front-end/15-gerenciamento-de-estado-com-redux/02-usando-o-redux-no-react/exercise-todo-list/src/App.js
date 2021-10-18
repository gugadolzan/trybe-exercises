import React from 'react';
import { connect } from 'react-redux';
import FilterButtons from './components/FilterButtons';
import InputTodo from './components/InputTodo';
import Item from './components/Item';

const getTasks = (listTodo, filter) => {
  switch (filter) {
    case 'all':
      return listTodo;
    case 'done':
      return listTodo.filter((item) => item.isDone);
    case 'active':
      return listTodo.filter((item) => !item.isDone);
    default:
      return listTodo;
  }
};

const App = ({ listTodo, filter }) => (
  <div className="App">
    <InputTodo />
    <FilterButtons />
    {listTodo && (
      <ul>
        {getTasks(listTodo, filter).map((todoItem, index) => (
          <li key={index + 1}>
            <Item content={todoItem.todo} />
          </li>
        ))}
      </ul>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  listTodo: state.listReducer.listTodo,
  filter: state.listReducer.filter,
});

export default connect(mapStateToProps)(App);
