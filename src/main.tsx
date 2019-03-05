import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Router from 'routers/index';

// render react DOM
ReactDOM.render(
  <div>
      <h1>this is sdd community group purchase.</h1>
      <Router />
  </div>,
  document.getElementById('root')
);
