import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LandingQuote from './LandingQuote';
import AllQuotes from './AllQuotes';
import { getAllQuotes, getAllPhotos, getAllCombos } from '../redux/reducer';

class QuotesContainer extends Component {
  constructor() {
    super()
    this.state = {
      randomIds: []
    }
  }
  getRandomIds = () => {
    let randomIds = []
    for (let i = 0; i < 18; i++) { randomIds.push(Math.floor(Math.random() * 99) + 1) };
    this.setState({
      randomIds: randomIds
    })
  } 
  componentDidMount = () => {
    this.getRandomIds();
    this.props.getAllCombos();
  }

  render() {
    return (
      <div>
        {window.location.href === "http://localhost:3000/#/quotes" ?
          <div><AllQuotes /></div>
          :
          <div>
            <LandingQuote quote={this.props.comboList[this.state.randomIds[0]]} /> CHANGE THIS BASED ON TIME/DATE
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
  }
}

export default connect(mapStateToProps, { getAllQuotes, getAllPhotos, getAllCombos })(QuotesContainer);