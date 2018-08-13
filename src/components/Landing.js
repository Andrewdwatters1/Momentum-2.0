import React from 'react';
import Time from './Time';
import ToDo from './ToDo';
import QuotesContainer from './QuotesContainer';

const Landing = function() {
  return (
    <div>
      <Time/>
      <ToDo/>
      <QuotesContainer/>
    </div>
  )
}

export default Landing;