import React from 'react';
import { connect } from 'react-redux';

import AddPhoto from './AddPhoto';
import AddQuote from './AddQuote';

const AllQuotes = function (props) {
  if (props.comboList.length) {
    console.log(props.comboList)
    let randomList = [];
    for (let i = 0; i < 18; i++) {
      randomList.push(props.comboList[Math.floor(Math.random() * 99) + 1])
    }
    let allCombos = randomList.map((e, i) => {
      return (
        <div key={i} className="quotes-grid-item">
          <img src={e.url} alt="Oops, something went wrong :(" className="quotes-grid-image" />
          <p className="quotes-grid-content">{e.quote}</p>
          <p>{e.url}</p>
        </div>
      )
      let itemsPerPage = 30;
      allCombos.length = itemsPerPage;
    })
    return (
      <div className="quotes-grid-container">
        {allCombos}
        <AddPhoto />
        <AddQuote />
      </div>
    )
  } else {
    return null
  }
}

const mapStateToProps = state => {
  return {
    comboList: state.comboList,
    quotesList: state.quotesList,
    photosList: state.photosList,
  }
}

export default connect(mapStateToProps)(AllQuotes);