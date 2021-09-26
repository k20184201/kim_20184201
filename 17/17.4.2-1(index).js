import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './modules/17.3.3-1(index)';

const store = createStore(rootReducer);

ReactDOM.render(
<Provider store={store}>
(<App />
</Provider>,
 document.getElementById('root'),
 );