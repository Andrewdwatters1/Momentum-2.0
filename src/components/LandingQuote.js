import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllCombos } from '../redux/reducer';

class LandingQuote extends Component {
  render() {
    let renderedContent = this.props.comboList ? this.props.comboList[Math.floor(Math.random() * 99) + 1] : null
    if (renderedContent) {
      return (
        <h2 class="landing-quote">{renderedContent.quote}</h2>
      )
    } else return null
  }
}

const mapStateToProps = state => {
  return {
    comboList: state.comboList
  }
}

export default connect(mapStateToProps, { getAllCombos })(LandingQuote);