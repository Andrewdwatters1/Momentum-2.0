import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddPhoto from './AddPhoto';
import AddQuote from './AddQuote';
import ComboItem from './ComboItem';
import { getAllCombos } from '../redux/reducer';


class AllQuotes extends Component {
  constructor() {
    super()
    this.state = {
      page: 0,
      allCombos: [],
      pageCombos: [],
    }
  }

  componentDidMount = () => {
    this.props.getAllCombos().then(response => {
      let result = [];
      let start = this.state.page * 6;
      let end = (this.state.page * 6) + 6;
      for (let i = start; i < end; i++) {
        result.push(<ComboItem imgsrc={response.value.data[i].url} quote={response.value.data[i].quote} id={i + this.state.page + 1} />)
      }
      this.setState({
        allCombos: response.value.data,
        pageCombos: result,
      })
    })
  }
  pageLeft = () => {
    let result = [];
    let start = (this.state.page - 1) * 6;
    let end = ((this.state.page - 1) * 6) + 6;
    for (let i = start; i < end; i++) {
      result.push(<ComboItem imgsrc={this.state.allCombos[i].url} quote={this.state.allCombos[i].quote} id={i + this.state.page + 1} />)
    }
    this.setState({
      pageCombos: result,
      page: this.state.page - 1
    })
  }
  pageRight = () => {
    let result = [];
    let start = (this.state.page + 1) * 6;
    let end = ((this.state.page + 1) * 6) + 6;
    for (let i = start; i < end; i++) {
      result.push(<ComboItem imgsrc={this.state.allCombos[i].url} quote={this.state.allCombos[i].quote} id={i + this.state.page + 1} />)
    }
    this.setState({
      pageCombos: result,
      page: this.state.page + 1
    })
  }

  render() {
    console.log(1111111111, this.state.allCombos)
    let { pageCombos } = this.state;
    return this.state.pageCombos[0] ?
      (
        <div className="quotes-grid-container">
          {pageCombos}
          <AddPhoto />
          <AddQuote />
          <i class="fas fa-arrow-circle-left" onMouseDown={this.pageLeft} style={{display: this.state.page ? 'block' : 'none'}}></i>
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





    // import React from 'react';
// import {connect} from 'react-redux';

        // import AddPhoto from './AddPhoto';
        // import AddQuote from './AddQuote';
        // import ComboItem from './ComboItem';

// const AllQuotes = function (props) {
//   console.log(props.combos)
//   if(props.combos.length) {
//     let comboItems = props.combos.map((e, i) => {
//       return <ComboItem key={i} imgsrc={e.url} quote={e.quote} id={i}/>
//     })
//     return (
//       <div className="quotes-grid-container">
//         {comboItems}
//         <AddPhoto />
//         <AddQuote />
//         <i class="fas fa-arrow-right"></i>
//         <i class="fas fa-arrow-circle-right"></i>
//       </div>
//     )
//   } else {
//     return null
//   }
// }

// const mapStateToProps = state => {
//   return {
//     comboList: state.comboList,
//     quotesList: state.quotesList,
//     photosList: state.photosList,
//   }
// }

// export default connect(mapStateToProps)(AllQuotes);