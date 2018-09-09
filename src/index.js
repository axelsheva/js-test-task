import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './containers/App';

import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  React.createElement(Provider, {store}, React.createElement(App)),
  document.getElementById('root'),
);
