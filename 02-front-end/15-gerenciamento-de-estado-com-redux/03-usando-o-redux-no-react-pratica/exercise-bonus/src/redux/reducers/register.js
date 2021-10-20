import { ADD_REGISTER } from "../actions";

const INITIAL_STATE = [];

function registerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_REGISTER:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default registerReducer;
