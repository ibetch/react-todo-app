/**
 * Actions describe what happened
 * - send data from app to store
 */

/**
 * action creators
 */
let nextTodoId = 0;
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  };
};

export const toggleTodo = index => {
  return { type: 'TOGGLE_TODO', index };
};

export const setVisibilityFilter = filter => {
  return { type: 'SET_VISIBILITY_FILTER', filter };
};

/**
 * action types
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
