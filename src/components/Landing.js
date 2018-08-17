import React from 'react';

import Time from './Time';
import ToDo from './ToDo';
import Greeting from './Greeting';
import QuotesContainer from './QuotesContainer';
import LandingImage from './LandingImage';
import LandingQuote from './LandingQuote';

const Landing = function() {
  return (
    <div className="landing-main">
      <Greeting/>
      <Time/>
      <ToDo/>
      <QuotesContainer/>
      <LandingImage/>
      <LandingQuote/>
    </div>
  )
}

export default Landing;