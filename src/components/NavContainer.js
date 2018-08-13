import React from 'react';
import Dropdown from './Dropdown';
import Greeting from './Greeting';
import Weather from './Weather';

const NavContainer = function() {
  return (
    <div>
      <Dropdown/>
      <Greeting/>
      <Weather/>
    </div>
  )
}

export default NavContainer;