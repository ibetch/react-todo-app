/**
 * Reducers specify how the app's state changes in response to actions sent to the store
 * - each reducer manages its own part of the global state
 * - the `state` param is different for every reducer and corresponds to the part of the state it manages
 */

import { combineReducers } from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from './actions';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

/**
 * use Redux util `combineReducers()`
 */
const todoApp = combineReducers({
  visibilityFilter,
  todos,
});
/**
 * the following lines is the equivalent code without use of `combineReducers()`
 */
/** START EQUIVALENT EXAMPLE */
// function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action),
//   };
// }
/** END EQUIVALENT EXAMPLE */

export default todoApp;
