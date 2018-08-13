import React, { Component } from 'react';
import axios from 'axios';

class QuotesContainer extends Component {
  constructor() {
    super()
    this.state = {
      quotesList: [],
      landingQuote: '', // This stores a random quote from the DB
    }
  }

  componentDidMount = () => {
    let min = 1; 
    let max = 3;
    // max = last quote in DB, min always = 1. Once DB is complete this can be hard coded
    let id = Math.floor(Math.random() * (max - min + 1)) + min;
    axios.get(`/api/quote/${id}`).then(result => {
      this.setState({
        landingQuote: result.data[0].quote
      })
    }).catch(error => console.log('Error, originates in QuotesContainer lifecycle method', error))
  }

  render() {
    console.log(this.state.landingQuote);
    return (
      <p>Quote of the Day: {this.state.landingQuote}</p>
    )
  }
}

export default QuotesContainer;