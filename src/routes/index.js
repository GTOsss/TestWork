import React from 'react';
import { Route, hashHistory } from 'react-router';
import App from './app';
import Login from './login';

const redirect = (e) => {
  if (e.location.pathname === '/') {
    hashHistory.push('/login');
  }
};

const createRoutes = () => (
  <Route path={'/'} component={App} onEnter={redirect}>
    <Route path={'login'} component={Login} />
  </Route>
);

export default createRoutes();
