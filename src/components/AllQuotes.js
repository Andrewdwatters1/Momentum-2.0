import React from 'react';
import { connect } from 'react-redux';
import { getRandomIds } from '../redux/reducer';


import AddPhoto from './AddPhoto';
import AddQuote from './AddQuote';

const AllQuotes = function (props) {
  if (props.comboList.length) {
    console.log(props)
    let allCombos = props.comboList.map((e, i) => {
      return (
        <div key={i} className="quotes-grid-item">
          <img src={e.url} alt="Oops, something went wrong :(" className="quotes-grid-image" />
          <p>{e.quote}</p>
        </div>
      )
      let itemsPerPage = 9;
      allCombos.length = itemsPerPage;
    })
    console.log(allCombos[0], allCombos[1], allCombos[2], allCombos[3], allCombos[4], allCombos[5], allCombos[6], allCombos[7], allCombos[8],)
    return (
      <div className="quotes-grid-container">
        <div className="quotes-items-row">{allCombos[0]}{allCombos[1]}{allCombos[2]}</div>
        <div className="quotes-items-row">{allCombos[3]}{allCombos[4]}{allCombos[5]}</div>
        <div className="quotes-items-row">{allCombos[6]}{allCombos[7]}{allCombos[8]}</div>
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
    randomIds: state.randomIds
  }
}

export default connect(mapStateToProps, { getRandomIds })(AllQuotes);