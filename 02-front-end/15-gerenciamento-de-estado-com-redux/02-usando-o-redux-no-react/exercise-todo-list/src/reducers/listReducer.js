import { ADD_TODO, FILTER_TASKS } from '../actions';

const INITIAL_STATE = {
  listTodo: [],
  filter: 'all',
};

export default function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        listTodo: [
          ...state.listTodo,
          { todo: action.payload, isDone: false },
        ],
      };
    case FILTER_TASKS:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}
