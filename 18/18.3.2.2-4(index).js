import { ReactDOM } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react";
import "./index.css";
import App from "./App";
import rootReducer, { rootSaga } from "./modules";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger();
const SagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk, SagaMiddleware))
);
SagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
