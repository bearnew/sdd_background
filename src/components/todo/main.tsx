import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { App } from './index';

// render react DOM
ReactDOM.render(
  <App />,
  document.getElementById('root')
);