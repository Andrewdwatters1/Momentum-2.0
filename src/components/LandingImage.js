import React from 'react';
import { connect } from 'react-redux';

const LandingImage = function(props) {
  if(props.timezone === 'Hawaii') {
    return <div style={styles.hawaii}> </div>
  } else if(props.timezone === 'Alaska') {
    return <div style={styles.alaska}> </div>
  } else if(props.timezone === 'Pacific') {
    return <div style={styles.pacific}> </div>
  } else if(props.timezone === 'Mountain') {
    return <div style={styles.mountain}> </div>
  } else if(props.timezone === 'Central') {
    return <div style={styles.central}> </div>
  } else if(props.timezone === 'Eastern') {
    return <div style={styles.eastern}> </div>
  } else if (props.timezone === 'GMT') {
    return <div style={styles.default}> </div>
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
  }, hawaii: {
    backgroundColor: 'red',
  }, hawaii: {
    backgroundColor: 'red',
  }, hawaii: {
    backgroundColor: 'red',
  }, hawaii: {
    backgroundColor: 'red',
  }, hawaii: {
    backgroundColor: 'red',
  }, hawaii: {
    backgroundColor: 'red',
  }, 
}