import React from 'react';
import { connect } from 'react-redux';

import AddPhoto from './AddPhoto';
import AddQuote from './AddQuote';
import ComboItem from './ComboItem';

const AllQuotes = function (props) {
  if (props.comboList.length) {
    console.log(props.comboList)
    let randomList = [];
    for (let i = 0; i < 18; i++) {
      randomList.push(props.comboList[Math.floor(Math.random() * 99) + 1])
    }
    let allCombos = randomList.map((e, i) => {
      return <ComboItem key={i} imgsrc={e.url} quote={e.quote} id={i+1}/>
      let itemsPerPage = 30;
      allCombos.length = itemsPerPage;
    })
    console.log(allCombos)
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