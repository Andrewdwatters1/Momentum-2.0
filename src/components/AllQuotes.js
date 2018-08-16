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
          <p>{e.quote}</p>
          <p>{e.url}</p>
        </div>
      )
      let itemsPerPage = 30;
      allCombos.length = itemsPerPage;
    })
    return (
      <div className="quotes-grid-container">
        <div className="quotes-items-row">{allCombos[0]}{allCombos[1]}{allCombos[2]}</div>
        <div className="quotes-items-row">{allCombos[3]}{allCombos[4]}{allCombos[5]}</div>
        <div className="quotes-items-row">{allCombos[6]}{allCombos[7]}{allCombos[8]}</div>
        <div className="quotes-items-row">{allCombos[9]}{allCombos[10]}{allCombos[11]}</div>
        <div className="quotes-items-row">{allCombos[12]}{allCombos[13]}{allCombos[14]}</div>
        <div className="quotes-items-row">{allCombos[15]}{allCombos[16]}{allCombos[17]}</div>
        <div className="quotes-items-row">{allCombos[18]}{allCombos[19]}{allCombos[20]}</div>
        <div className="quotes-items-row">{allCombos[21]}{allCombos[22]}{allCombos[23]}</div>
        <div className="quotes-items-row">{allCombos[24]}{allCombos[25]}{allCombos[26]}</div>
        <div className="quotes-items-row">{allCombos[27]}{allCombos[28]}{allCombos[29]}</div>
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