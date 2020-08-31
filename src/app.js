import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/_styles.scss';

import RegisterPage from './components/pages/RegisterPage';
import LoginPage from './components/pages/LoginPage';
import HomePage from './components/pages/HomePage';
import CreatePage from './components/pages/CreatePage';

import CheckAuth from './components/helpers/CheckAuth';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/home" component={CheckAuth(HomePage)} />
      <Route path="/create" component={CheckAuth(CreatePage)} />
    </Switch>
  </Router>,
  document.getElementById('app')
);
