import { ReactDOM } from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react';
import { createStore } from '../../../../../AppData/Local/Microsoft/TypeScript/4.4/node_modules/redux/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules/24.1.5-2(index)';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
