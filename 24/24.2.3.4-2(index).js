import { combineReducers } from 'redux';
import auth from './24.2.2-1(auth)';
import loading from './24.2.3.4-1(loading)';

const rootReducer = combineReducers({
  auth,
  loading,
});
export default rootReducer;
