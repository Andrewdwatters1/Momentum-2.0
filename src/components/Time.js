import React from 'react';
import Clock from 'react-live-clock';
import { connect } from 'react-redux';

const Time = function(props) {
  if(props.timezone && props.timezone) {
    return (
      <div>
        <h1 className="font-huge"><Clock format={props.timeformat} ticking={true} timezone={`US/${props.timezone}`} /></h1>
      </div>
    )
  } else {
    return null
  }
}

const mapStateToProps = state => {
  return {
    timezone: state.timezone,
    timeformat: state.timeformat
  }
}

export default connect(mapStateToProps)(Time);