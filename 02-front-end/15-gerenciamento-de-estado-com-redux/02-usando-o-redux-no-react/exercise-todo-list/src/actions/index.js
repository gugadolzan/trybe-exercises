export const ADD_TODO = 'ADD_TODO';
export const FILTER_TASKS = 'FILTER_TASKS';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const filterTasks = (filter) => ({
  type: FILTER_TASKS,
  payload: filter,
});
