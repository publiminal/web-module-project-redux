import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore} from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// console.log('store : ' ,store)
// console.log('store : ' ,store.getState())



ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
