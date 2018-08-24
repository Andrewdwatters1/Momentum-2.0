import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AllQuotes from './AllQuotes';
import { getAllCombos } from '../redux/reducer';

class QuotesContainer extends Component {

  // componentDidMount = () => {
  //   this.props.getAllCombos();
  // }

  render() {
    return (
      <div>
        <Link to="/"><button>Home</button></Link>
        {/* <AllQuotes combos={this.props.comboList} /> */}
        <AllQuotes/>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     comboList: state.comboList
//   }
// }

// export default connect(mapStateToProps, { getAllCombos })(QuotesContainer);
export default QuotesContainer;