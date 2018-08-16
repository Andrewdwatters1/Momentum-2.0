import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LandingQuote from './LandingQuote';
import AllQuotes from './AllQuotes';
import { getAllQuotes, getAllPhotos, getAllCombos, getRandomIds } from '../redux/reducer';

class QuotesContainer extends Component {
  componentDidMount = () => {
    this.props.getRandomIds();
    this.props.getAllCombos();
    // this.props.getAllQuotes();
    // this.props.getAllPhotos();
  }
  render() {
    // console.log(this.props.comboList)
    return (
      <div>
        {window.location.href === "http://localhost:3000/#/quotes" ? 
        <div>
          <AllQuotes />
        </div>
        : 
        <div>
          <LandingQuote quote={this.props.comboList[this.props.randomIds[0]]}/> CHANGE THIS BASED ON TIME/DATE
          <Link to="/quotes"><button> Get Inspired </button></Link>
        </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    comboList: state.comboList,
    quotesList: state.quotesList,
    photosList: state.photosList,
    randomIds: state.randomIds
  }
}

export default connect(mapStateToProps, { getAllQuotes, getAllPhotos, getRandomIds, getAllCombos })(QuotesContainer);