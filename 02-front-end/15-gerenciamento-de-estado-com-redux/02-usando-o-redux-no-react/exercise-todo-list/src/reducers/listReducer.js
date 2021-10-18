import { ADD_TODO } from '../actions';

const INITIAL_STATE = {
  listTodo: [],
};

export default function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TODO:
      return { listTodo: [...state.listTodo, action.payload] };
    default:
      return state;
  }
}
