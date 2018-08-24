import React from 'react';
import { connect } from 'react-redux';

import hawaii from '../images/hawaii.jpg';
import alaska from '../images/alaska.jpg';
import pacific from '../images/pacific.jpg';
import mountain from '../images/mountain.jpg';
import central from '../images/central.jpg';
import eastern from '../images/eastern.jpg';
import gmt from '../images/gmt.jpg';

const LandingImage = function (props) {
  if (props.timezone === 'Hawaii') {
    return <div style={styles.hawaii}></div>
  } else if (props.timezone === 'Alaska') {
    return <div style={styles.alaska}></div>
  } else if (props.timezone === 'Pacific') {
    return <div style={styles.pacific}></div>
  } else if (props.timezone === 'Mountain') {
    return <div style={styles.mountain}></div>
  } else if (props.timezone === 'Central') {
    return <div style={styles.central}></div>
  } else if (props.timezone === 'Eastern') {
    return <div style={styles.eastern}></div>
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
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    zIndex: -1,
    opacity: 0.95
  },
  alaska: {
    backgroundImage: `url(${alaska}`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    zIndex: -1,
    opacity: 0.95
  },
  pacific: {
    backgroundImage: `url(${pacific}`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    zIndex: -1,
    opacity: 0.95
  },
  mountain: {
    backgroundImage: `url(${mountain}`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    zIndex: -1,
    opacity: 0.92
  },
  central: {
    backgroundImage: `url(${central}`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    zIndex: -1,
    opacity: 0.95
  },
  eastern: {
    backgroundImage: `url(${eastern}`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    zIndex: -1,
    opacity: .92
  },
  default: {
    backgroundImage: `url(${gmt}`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    zIndex: -1,
    opacity: .98
  },
}