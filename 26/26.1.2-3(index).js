import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './24.2.3.5-4(auth)';
import loading from './24.2.3.4-1(loading)';
import user, { userSaga } from './24.3.3-2(user)';
import write, { writeSaga } from './25.3.3-2(write)';
import post, { postSaga } from './26.1.2-2(post)';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), postSaga()]);
}

export default rootReducer;
