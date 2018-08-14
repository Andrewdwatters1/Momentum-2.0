import React, { Component } from 'react';
import axios from 'axios';

import LandingQuote from './LandingQuote';
import AllQuotes from './AllQuotes';

class QuotesContainer extends Component {
  constructor() {
    super()
    this.state = {
      quotesList: [],
      imagesList: [],
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

  getAllQuotes = () => {
    axios.get(`/api/quotes`).then(result => {
      this.setState({
        quotesList: [...this.state.quotesList, ...result.data]
      })
    })
  }

  getAllImages = () => {
    axios.get(`/api/images`).then(result => {
      this.setState({
        imagesList: [...this.state.imagesList, ...result.data]
      })
    })
  }

  componentDidMount = () => {
    this.getAllQuotes();
    this.getAllImages();
    this.getRandomIds();
  }

  render() {
    // console.log('random IDs', this.state.quoteIds, this.state.imageIds)
    // console.log('quotes List', this.state.quotesList)
    // console.log('images List', this.state.imagesList)
    console.log(window.location)
    // let pageQuotes = this.state.quotesList.map((e, i) => {
    //   if (i < 8) {
    //     return (
    //       <Quote key={i}>
    //         <div>
    //           image // from random image id
    //           {e.text}
    //           comment button
    //           edit button
    //           delete button
    //           rate button
    //         </div>
    //       </Quote>
    //     )
    //   }
    // })
    // let landingQuote = this.state.quotesList[0] 
    return (
      <div>
        {window.location.href === "http://localhost:3000/#/quotes" ? <AllQuotes/> : <LandingQuote/>}
      </div>
    )
  }
}

export default QuotesContainer;