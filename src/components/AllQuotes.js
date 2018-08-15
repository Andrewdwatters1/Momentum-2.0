import React from 'react';
import { connect } from 'react-redux';
import { getRandomIds } from '../redux/reducer';


import AddPhoto from './AddPhoto';
import AddQuote from './AddQuote';

const AllQuotes = function (props) {
  if (props.quotesList.length && props.photosList.length) {
  let a = props.quotesList.length
  let b = props.photosList.length
  let c = a < b ? a : b

  let itemsPerPage = 9;
  let combos = []
  for (let i = 0; i < itemsPerPage; i++) {
    combos.push({
      quote: props.quotesList[props.randomIds[i]],
      photo: props.photosList[props.randomIds[i]]
    })
  }
  let allCombos = combos.map((e, i) => {
    return (
      <div key={i} className="quotes-grid-item">
        <img src={e.photo.url} alt="Oops, something went wrong :(" className="quotes-grid-image"/>
        <p>{e.quote.quote}</p>
      </div>
    )
  })

    return (
      <div className="quotes-grid-container">
        <div className="quotes-items-row">{allCombos[0]}{allCombos[1]}{allCombos[2]}</div>
        <div className="quotes-items-row">{allCombos[3]}{allCombos[4]}{allCombos[5]}</div>
        <div className="quotes-items-row">{allCombos[6]}{allCombos[7]}{allCombos[8]}</div>
        <AddPhoto/>
        <AddQuote/>
      </div>
    )
  } else {
    return null
  }
}

const mapStateToProps = state => {
  return {
    quotesList: state.quotesList,
    photosList: state.photosList,
    randomIds: state.randomIds
  }
}

export default connect(mapStateToProps, {getRandomIds})(AllQuotes);