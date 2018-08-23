import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import { getUser } from './redux/reducer';
import Landing from './components/Landing';
import NavContainer from './components/NavContainer';
import QuotesContainer from './components/QuotesContainer';

class App extends Component {

  componentDidMount = () => {
    this.props.getUser();
  }
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

export default connect(null, { getUser })(App);
