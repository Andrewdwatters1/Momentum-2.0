import React from 'react';
import { connect } from 'react-redux';

import AddPhoto from './AddPhoto';
import AddQuote from './AddQuote';

const AllQuotes = function (props) {
  if (props.quotesList.length && props.photosList.length) {
  let a = props.quotesList.length
  let b = props.photosList.length
  let c = a < b ? a : b

  let combos = []
  for (let i = 0; i < c; i++) {
    combos.push({
      quote: props.quotesList[i],
      photo: props.photosList[i]
    })
  }
  console.log(combos[0], combos[1], combos[2])
  combos.length = 9; // this sets the number of items returned
  let allCombos = combos.map((e, i) => {
    return (
      <div key={i}>
        <img src={e.photo.url} alt="Oops, something went wrong :("/>
        <p>{e.quote.quote}</p>
      </div>
    )
  })
    return (
      <div>
        {allCombos}<br/><br/> 
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
    photosList: state.photosList
  }
}

export default connect(mapStateToProps)(AllQuotes);