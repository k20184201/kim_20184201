import { combineReducers } from "redux";
import counter from "./18.3.1.2-2(counter)";
import sample from "./18.3.1.4-2(sample)";
import loading from "./18.3.1.5-3(loading)";

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export default rootReducer;
