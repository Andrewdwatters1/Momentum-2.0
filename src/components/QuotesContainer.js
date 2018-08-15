import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LandingQuote from './LandingQuote';
import AllQuotes from './AllQuotes';
import { getAllQuotes, getAllPhotos } from '../redux/reducer';

class QuotesContainer extends Component {
  constructor() {
    super()
    this.state = {
      landingQuote: '',
      quoteIds: [],
      photoIds: [],
      quoteMax: 3,
      photoMax: 3,
      min: 1 // max = last quote/img in DB, min always = 1. Once DB is complete this can be hard coded
    }
  }

  getRandomIds = () => { // quote and photo RANDOMS should probably merged into one for loop
    let quoteRandoms = [];
    let photoRandoms = [];
    for (let i = 0; i < 9; i++) { quoteRandoms.push(Math.floor(Math.random() * (this.state.quoteMax - this.state.min + 1)) + this.state.min) };
    for (let i = 0; i < 9; i++) { photoRandoms.push(Math.floor(Math.random() * (this.state.photoMax - this.state.min + 1)) + this.state.min) };
    this.setState({
      quoteIds: [...this.state.quoteIds, ...quoteRandoms],
      photoIds: [...this.state.photoIds, ...photoRandoms]
    })
  }

  componentDidMount = () => {
    this.getRandomIds();
    this.props.getAllQuotes();
    this.props.getAllPhotos();
  }

  render() {
    // console.log('random IDs', this.state.quoteIds, this.state.photoIds)
    // console.log('quotes List', this.state.quotesList)
    // console.log('photos List', this.state.photosList)
    // console.log('find the quoteslist', this.props)

    return (
      <div>
        {window.location.href === "http://localhost:3000/#/quotes" ? 
        <div>
          <AllQuotes />
        </div>
        : 
        <div>
          <LandingQuote quote={this.props.quotesList[0]}/>
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
    photosList: state.photosList
  }
}

export default connect(mapStateToProps, { getAllQuotes, getAllPhotos })(QuotesContainer);