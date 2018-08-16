import React from 'react';
import { connect } from 'react-redux';

import hawaii from '../images/hawaii.jpg';
import alaska from '../images/alaska.jpg';
import pacific from '../images/pacific.jpg';
import mountain from '../images/mountain.jpg';
import central from '../images/central.jpg';
import eastern from '../images/eastern.jpg';
import gmt from '../images/gmt.jpg';

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
  } else return <div style={styles.default}></div>
}

const mapStateToProps = state => {
  return {
    timezone: state.timezone
  }
}

export default connect(mapStateToProps)(LandingImage);

let styles = {
  hawaii: {
    backgroundImage: `url(${hawaii}`,
    height: 800
  }, 
  alaska: {
    backgroundImage: `url(${alaska}`,
    height: 800
  }, 
  pacific: {
    backgroundImage: `url(${pacific}`,
    height: 800
  }, 
  mountain: {
    backgroundImage: `url(${mountain}`,
    height: 800
  }, 
  central: {
    backgroundImage: `url(${central}`,
    height: 800
  }, 
  eastern: {
    backgroundImage: `url(${eastern}`,
    height: 800
  }, 
  default: {
    backgroundImage: `url(${gmt}`,
    height: 800
  }, 
}