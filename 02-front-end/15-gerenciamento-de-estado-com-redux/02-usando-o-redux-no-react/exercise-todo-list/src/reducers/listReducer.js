import { ADD_TODO, FILTER_TASKS, TOGGLE_DONE } from '../actions';

const INITIAL_STATE = {
  listTodo: [],
  filter: 'all',
  id: 0,
};

export default function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        listTodo: [
          ...state.listTodo,
          { todo: action.payload, isDone: false, id: state.id },
        ],
        id: state.id + 1,
      };
    case FILTER_TASKS:
      return {
        ...state,
        filter: action.payload,
      };
    case TOGGLE_DONE:
      return {
        ...state,
        listTodo: state.listTodo.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    default:
      return state;
  }
}
