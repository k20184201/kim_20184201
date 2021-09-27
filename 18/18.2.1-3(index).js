import { ReactDOM } from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react";
import "./index.css";
import App from "./App";
import rootReducer from "./modules/18.1-2(index)";
import loggerMiddleware from "./lib/18.2.1-2(loggerMiddleware)";

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
