import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LandingQuote from './LandingQuote';
import AllQuotes from './AllQuotes';
import { getAllQuotes, getAllImages } from '../redux/reducer';

class QuotesContainer extends Component {
  constructor() {
    super()
    this.state = {
      landingQuote: '',
      quoteIds: [],
      imageIds: [],
      quoteMax: 3,
      imageMax: 3,
      min: 1 // max = last quote/img in DB, min always = 1. Once DB is complete this can be hard coded
    }
  }

  getRandomIds = () => { // quote and image RANDOMS should probably merged into one for loop
    let quoteRandoms = [];
    let imageRandoms = [];
    for (let i = 0; i < 9; i++) { quoteRandoms.push(Math.floor(Math.random() * (this.state.quoteMax - this.state.min + 1)) + this.state.min) };
    for (let i = 0; i < 9; i++) { imageRandoms.push(Math.floor(Math.random() * (this.state.imageMax - this.state.min + 1)) + this.state.min) };
    this.setState({
      quoteIds: [...this.state.quoteIds, ...quoteRandoms],
      imageIds: [...this.state.imageIds, ...imageRandoms]
    })
  }

  componentDidMount = () => {
    this.getRandomIds();
    this.props.getAllQuotes();
    this.props.getAllImages();
  }

  render() {
    // console.log('random IDs', this.state.quoteIds, this.state.imageIds)
    // console.log('quotes List', this.state.quotesList)
    // console.log('images List', this.state.imagesList)
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
    imagesList: state.imagesList
  }
}

export default connect(mapStateToProps, { getAllQuotes, getAllImages })(QuotesContainer);