import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import Chef from './components/chef.js';
import './stylesheet.css';

ReactDOM.render(
  <Provider store={store}>
    <Chef />
  </Provider>,
  document.getElementById('root')
);
