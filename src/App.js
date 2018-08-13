import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Time from './components/Time';
import ToDo from './components/ToDo';
import Weather from './components/Weather';
import Menu from './components/Menu';
import QuotesContainer from './components/QuotesContainer';
import Quote from './components/Quote';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div>
          {/* <Time/> */}
          <ToDo/>
          {/* <Weather/> */}
          <Menu/>
          <QuotesContainer/>
          <Quote/>
        </div>
      </div>
    );
  }
}

export default App;
