import React from 'react';

const Greeting = function() {
  return (
    <h1>Good afternoon/morning/evening 'name'!</h1> // should change based on time of day
    // should not be rendered if path is /quotes => ie: only shown on landing page
  )
}

export default Greeting; // subscribes to redux store for time