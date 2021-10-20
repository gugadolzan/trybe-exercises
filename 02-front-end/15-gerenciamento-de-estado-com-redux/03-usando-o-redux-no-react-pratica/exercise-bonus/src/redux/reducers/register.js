import { ADD_REGISTER, DELETE_REGISTER } from '../actions';

const INITIAL_STATE = [];

function registerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_REGISTER:
      return [...state, action.payload];
    case DELETE_REGISTER:
      return state.filter((register) => register !== action.payload);
    default:
      return state;
  }
}

export default registerReducer;
