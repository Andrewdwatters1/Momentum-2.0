import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LandingQuote from './LandingQuote';
import AllQuotes from './AllQuotes';
import { getAllQuotes, getAllPhotos, getRandomIds } from '../redux/reducer';

class QuotesContainer extends Component {
  componentDidMount = () => {
    this.props.getRandomIds();
    this.props.getAllQuotes();
    this.props.getAllPhotos();
  }
  render() {
    console.log(this.props.randomIds)
    return (
      <div>
        {window.location.href === "http://localhost:3000/#/quotes" ? 
        <div>
          <AllQuotes />
        </div>
        : 
        <div>
          <LandingQuote quote={this.props.quotesList[this.props.randomIds[0]]}/> // 
          <Link to="/quotes"><button> Get Inspired </button></Link>
        </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    quotesList: state.quotesList,
    photosList: state.photosList,
    randomIds: state.randomIds
  }
}

export default connect(mapStateToProps, { getAllQuotes, getAllPhotos, getRandomIds })(QuotesContainer);