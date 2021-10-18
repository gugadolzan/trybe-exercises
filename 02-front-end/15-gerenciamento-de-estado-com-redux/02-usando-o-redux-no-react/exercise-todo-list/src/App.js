import React from 'react';
import { connect } from 'react-redux';
import { toggleDone } from './actions';
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

const App = ({ listTodo, filter, toggleDone }) => (
  <div className="App">
    <InputTodo />
    <FilterButtons />
    {listTodo && (
      <ul>
        {getTasks(listTodo, filter).map((todoItem, index) => (
          <li
            key={index + 1}
            onClick={() => toggleDone(todoItem.id)}
            style={{
              textDecoration: todoItem.isDone ? 'line-through' : 'none',
            }}
          >
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

const mapDispatchToProps = (dispatch) => ({
  toggleDone: (id) => dispatch(toggleDone(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
