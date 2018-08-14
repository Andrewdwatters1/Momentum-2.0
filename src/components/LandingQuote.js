import React from 'react';

const LandingQuote = function (props) {
  if (props.quote) {
    return <div>{props.quote.quote}</div>
  } else {
    return null
  }
}


export default LandingQuote;