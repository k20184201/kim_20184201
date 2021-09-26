import rootReducer from './modules/17.3.3-1(index)';

const store = createStore(
  rootReducer /*preloaderState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
