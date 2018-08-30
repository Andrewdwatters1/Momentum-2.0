import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AllQuotes from './AllQuotes';

class QuotesContainer extends Component {
  render() {
    return (
      <div className="quotes-container-background">
        <div className="home-button-center">
          <Link to="/"><i class="fas fa-home"></i></Link>
        </div>
        <AllQuotes />
      </div>
    )
  }
}

export default QuotesContainer;