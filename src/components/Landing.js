import React from 'react';

import Time from './Time';
import ToDo from './ToDo';
import Greeting from './Greeting';
import QuotesContainer from './QuotesContainer';

const Landing = function() {
  // console.log(window.location)
  return (
    <div>
      <Greeting/>
      <Time/>
      <ToDo/>
      <QuotesContainer/>
    </div>
  )
}

export default Landing;