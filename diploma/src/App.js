import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import HomePage from './components/_design/HomePage';
import Login from './components/_login/Login';
import Registration from './components/_registration/Registration';
import LeagueForm from './components/_main/LeagueForm';

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={HomePage} />
        <Route path="/Login" component={Login} />
        <Route path="/Registration" component={Registration} />
        <Route path="/LeagueForm" component={LeagueForm} />
      </HashRouter>
    )
  }
}