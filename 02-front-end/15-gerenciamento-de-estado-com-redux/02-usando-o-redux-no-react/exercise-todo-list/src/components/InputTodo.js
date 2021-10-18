import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

function InputTodo(props) {
  const { addTodo } = props;
  let inputElement;
  return (
    <form
      className="InputTodo"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(inputElement.value);
        inputElement.value = '';
      }}
    >
      <label htmlFor="inputTodo">Tarefa:</label>
      <input
        ref={(input) => {
          inputElement = input;
        }}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(InputTodo);

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
