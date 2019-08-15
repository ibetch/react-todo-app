/**
 * Reducers specify how the app's state changes in response to actions sent to the store
 * - each reducer manages its own part of the global state
 * - the `state` param is different for every reducer and corresponds to the part of the state it manages
 */

import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

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
