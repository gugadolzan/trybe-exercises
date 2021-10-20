export const LOGIN = 'LOGIN';
export const ADD_REGISTER = 'ADD_REGISTER';
export const DELETE_REGISTER = 'DELETE_REGISTER';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const addRegister = (payload) => ({
  type: ADD_REGISTER,
  payload,
});

export const deleteRegister = (payload) => ({
  type: DELETE_REGISTER,
  payload,
});
