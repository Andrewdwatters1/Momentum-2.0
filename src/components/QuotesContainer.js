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
      randomIds: [],
    }
  }
  getRandomIds = () => {
    let randoms = []
    for (let i = 0; i < 18; i) {
      let randomNum = Math.floor(Math.random() * 99) + 1
      if (!randoms.includes(randomNum)) {
        randoms.push(randomNum)
        i++
      }
    };
    this.setState({
      randomIds: this.state.randomIds
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