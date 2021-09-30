import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './24.2.3.5-4(auth)';
import loading from './24.2.3.4-1(loading)';
import user, { userSaga } from './24.2.4-2(user)';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}

export default rootReducer;
