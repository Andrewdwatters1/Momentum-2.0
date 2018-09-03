import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AllQuotes from './AllQuotes';

class QuotesContainer extends Component {
  render() {
    return (
      <div className="quotes-container-background image-grid-app">
        <div className="home-button-center">
          <Link to="/"><i class="fas fa-home"></i></Link>
        </div>
        <div>
          <AllQuotes />
        </div>
      </div>
    )
  }
}

export default QuotesContainer;