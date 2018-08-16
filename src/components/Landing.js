import React from 'react';

import Time from './Time';
import ToDo from './ToDo';
import Greeting from './Greeting';
import QuotesContainer from './QuotesContainer';
import LandingImage from './LandingImage';

const Landing = function() {
  return (
    <div>
      <Greeting/>
      <Time/>
      <ToDo/>
      <QuotesContainer/>
      <LandingImage/>
    </div>
  )
}

export default Landing;