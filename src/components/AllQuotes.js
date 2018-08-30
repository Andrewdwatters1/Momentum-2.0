import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, ToastStore } from 'react-toasts';

import AddPhoto from './AddPhoto';
import AddQuote from './AddQuote';
import ComboItem from './ComboItem';
import { getAllCombos } from '../redux/reducer';

class AllQuotes extends Component {
  constructor() {
    super()
    this.state = {
      resultsPerPage: 15,
      page: 0,
      allCombos: [],
      pageCombos: [],
    }
  }

  pageLeft = () => { // maybe this goes away
    let result = [];
    let start = (this.state.page - 1) * this.state.resultsPerPage;
    let end = ((this.state.page - 1) * this.state.resultsPerPage) + this.state.resultsPerPage;
    for (let i = start; i < end; i++) {
      result.push(
        <ComboItem
          imgsrc={this.state.allCombos[i].url}
          quote={this.state.allCombos[i].quote}
          photoId={this.state.allCombos[i].id}
          id={i} />
      )
    }
    this.setState({
      pageCombos: result,
      page: this.state.page - 1
    })
  }
  pageRight = () => { // maybe this goes away
    let result = [];
    let start = (this.state.page + 1) * this.state.resultsPerPage;
    let end = ((this.state.page + 1) * this.state.resultsPerPage) + this.state.resultsPerPage;
    for (let i = start; i < end; i++) {
      result.push(
        <ComboItem
          imgsrc={this.state.allCombos[i].url}
          quote={this.state.allCombos[i].quote}
          photoId={this.state.allCombos[i].id}
          id={i} />
      )
    }
    this.setState({
      pageCombos: result,
      page: this.state.page + 1
    })
  }
  componentDidMount = () => {
    this.props.getAllCombos().then(response => {
      let result = [];
      let start = this.state.page * this.state.resultsPerPage;
      let end = (this.state.page * this.state.resultsPerPage) + this.state.resultsPerPage;
      for (let i = start; i < end; i++) {
        result.push(
          <ComboItem
            imgsrc={response.value[i].url}
            quote={response.value[i].quote}
            photoId={response.value[i].id}
            id={i}
            allCombos={this.state.allCombos} />
        )
      }
      this.setState({
        allCombos: response.value,
        pageCombos: result,
      })
    })
  }

  render() {
    let { pageCombos } = this.state;
    return this.state.pageCombos[0] ?
      (
        <div>
          <div className="quotes-grid-container">
            {pageCombos}
          </div>
          <AddPhoto />
          <AddQuote />
          <i class="fas fa-arrow-circle-left" onMouseDown={this.pageLeft} style={{ display: this.state.page ? 'block' : 'none' }}></i>
          <i class="fas fa-arrow-circle-right" onMouseDown={this.pageRight}></i>
        </div>
      )
      :
      null
  }
}

const mapStateToProps = state => {
  return {
    comboList: state.comboList
  }
}

export default connect(mapStateToProps, { getAllCombos })(AllQuotes);