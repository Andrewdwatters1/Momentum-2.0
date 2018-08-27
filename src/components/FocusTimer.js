import React from 'react';
import Timer from 'simple-react-timer';

const FocusTimer = function(props) {
  if (props.timerType === "work") {
    return (
      <div>
        <Timer startTime={Date.parse(new Date()) + (60000 * props.focusPeriod)} countDown />
      </div>
    )
  } else {
    return null
  }
}

export default FocusTimer;