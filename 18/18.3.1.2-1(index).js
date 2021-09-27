import { ReactDOM } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react";
import "./index.css";
import App from "./App";
import rootReducer from "./modules/18.1-2(index)";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
