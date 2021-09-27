import { combineReducers } from "redux";
import users, { usersSaga } from "./20.4.6-1(users)";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([usersSaga()]);
}
const rootReducer = combineReducers({ users });
export default rootReducer;
