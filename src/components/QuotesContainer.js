import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AllQuotes from './AllQuotes';

class QuotesContainer extends Component {
  render() {
    return (
    <div className="quotes-container-background">
        <Link to="/"><button>Home</button></Link>
        <AllQuotes/>
      </div>
    )
  }
}

export default QuotesContainer;