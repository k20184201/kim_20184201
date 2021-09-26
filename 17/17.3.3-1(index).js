import { combineReducers } from 'redux';
import counter from './17.3.1.3-1(counter)';
import todos from './17.3.2.3-1(todos)';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
