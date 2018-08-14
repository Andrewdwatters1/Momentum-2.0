import React from 'react';
import Dropdown from './Dropdown';
import Weather from './Weather';

const NavContainer = function() {
  return (
    <div>
      <Dropdown/>
      <Weather/>
    </div>
  )
}

export default NavContainer;