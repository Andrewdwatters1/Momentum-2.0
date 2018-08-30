import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getLandingQuote } from '../redux/reducer';

class LandingQuote extends Component {

componentDidMount = () => {
  this.props.getLandingQuote()
}

  render() {
    return this.props.landingQuote[0]
    ?
    <h2 className="landing-quote font-size-plus-light">{this.props.landingQuote[0].quote}</h2>
    :
    null
  }
}

const mapStateToProps = state => {
  return {
    landingQuote: state.landingQuote
  }
}

export default connect(mapStateToProps, { getLandingQuote })(LandingQuote);