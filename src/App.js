import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Landing from './components/Landing';
import NavContainer from './components/NavContainer';
import QuotesContainer from './components/QuotesContainer';

class App extends Component {
  render() {
    return (
      <div>
        <NavContainer/>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/quotes" component={QuotesContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
