import { combineReducers } from "redux";
import counter from "./18.3.1.2-2(counter)";
import sample from "./18.3.1.4-2(sample)";

const rootReducer = combineReducers({
  counter,
  sample,
});

export default rootReducer;
