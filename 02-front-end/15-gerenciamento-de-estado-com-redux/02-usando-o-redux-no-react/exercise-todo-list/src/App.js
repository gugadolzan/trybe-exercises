import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import InputTodo from './InputTodo';
import Item from './Item';

const App = ({ addTodo, listTodo }) => (
  <div className="App">
    <InputTodo addTodo={(todo) => addTodo(todo)} />
    {listTodo && (
      <ul>
        {listTodo.map((todo, index) => (
          <li key={index + 1}>
            <Item content={todo} />
          </li>
        ))}
      </ul>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  listTodo: state.listReducer.listTodo,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
