import React from 'react';
import { connect } from 'react-redux';

const LandingImage = function(props) {
  if(props.timezone === 'Hawaii') {
    return <div style={styles.hawaii}> testing </div>
  } else if(props.timezone === 'Alaska') {
    return <div style={styles.alaska}> testing </div>
  } else if(props.timezone === 'Pacific') {
    return <div style={styles.pacific}> testing </div>
  } else if(props.timezone === 'Mountain') {
    return <div style={styles.mountain}> testing </div>
  } else if(props.timezone === 'Central') {
    return <div style={styles.central}> testing </div>
  } else if(props.timezone === 'Eastern') {
    return <div style={styles.eastern}> testing </div>
  } else if (props.timezone === 'GMT') {
    return <div style={styles.default}> testing </div>
  } else return null
}

const mapStateToProps = state => {
  return {
    timezone: state.timezone
  }
}

export default connect(mapStateToProps)(LandingImage);

let styles = {
  hawaii: {
    backgroundColor: 'red',
  }, 
  alaska: {
    backgroundColor: 'blue',
  }, 
  pacific: {
    backgroundColor: 'green',
  }, 
  mountain: {
    backgroundColor: 'yellow',
  }, 
  central: {
    backgroundColor: 'pink',
  }, 
  eastern: {
    backgroundColor: 'aqua',
  }, 
  default: {
    backgroundColor: 'black',
  }, 
}