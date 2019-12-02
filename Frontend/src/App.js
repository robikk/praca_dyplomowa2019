import React from 'react';
import { Router, Route } from 'react-router-dom';
import HomePage from './components/_design/HomePage';
import Login from './components/_login/Login';
import Registration from './components/_registration/Registration';
import LeagueForm from './components/_main/LeagueForm';
import Schedule from './components/_main/Schedule';
import { history } from './components/_helpers'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    history.listen((_location, _action) => { });
  }

  requireAuth(nextState,
    replace) {
    if (!this.authenticated()) // pseudocode - SYNCHRONOUS function (cannot be async without extra callback parameter to this function)
      replace('/login');
  }

  render() {
    return (
      <Router history={history}>
        <Route exact path="/" component={HomePage} />
        <Route path="/Login" component={Login} />
        <Route path="/Registration" component={Registration} />
        <Route path="/Schedule" component={Schedule} />
        <Route path="/LeagueForm" component={LeagueForm} onEnter={this.requireAuth}/>
      </Router>
    )
  }
}