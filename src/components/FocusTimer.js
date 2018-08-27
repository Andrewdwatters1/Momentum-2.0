import React, { Component } from 'react';
import Timer from 'simple-react-timer';

const FocusTimer = function() {
  let min = 60000;

  return (
      <div>
        <Timer startTime={Date.parse(new Date())+60000} countDown/>
      </div>
    )
}

export default FocusTimer;