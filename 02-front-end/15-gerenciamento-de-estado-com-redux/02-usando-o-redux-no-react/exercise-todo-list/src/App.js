import React from 'react';
import { connect } from 'react-redux';
import InputTodo from './InputTodo';
import Item from './Item';

const App = ({ listTodo }) => (
  <div className="App">
    <InputTodo />
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

export default connect(mapStateToProps)(App);
