import { combineReducers } from "redux";
import counter, { counterSaga } from "./18.3.2.2-1(counter)";
import sample, { sampleSaga } from "./18.3.2.3-1(sample)";
import loading from "./18.3.1.5-3(loading)";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export function* rootSaga() {
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
