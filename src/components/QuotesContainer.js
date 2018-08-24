import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AllQuotes from './AllQuotes';

class QuotesContainer extends Component {
  render() {
    return (
      <div>
        <Link to="/"><button>Home</button></Link>
        <AllQuotes/>
      </div>
    )
  }
}

export default QuotesContainer;