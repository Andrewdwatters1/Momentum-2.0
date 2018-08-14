import React from 'react';
import { connect } from 'react-redux';

const AllQuotes = function (props) {
  if (props.quotesList.length && props.imagesList.length) {
  let a = props.quotesList.length
  let b = props.imagesList.length
  let c = a < b ? a : b

  let combos = []
  for (let i = 0; i < c; i++) {
    combos.push({
      quote: props.quotesList[i],
      image: props.imagesList[i]
    })
  }
  console.log(combos)
  combos.length = 9; // this sets the number of items returned
  let allCombos = combos.map((e, i) => {
    return (
      <div key={i}>
        {e.image.img}
        {e.quote.quote}
      </div>
    )
  })
  console.log(allCombos)
    return (
      <div>
        {allCombos}<br/><br/>
      </div>
    )
  } else {
    return null
  }
}

const mapStateToProps = state => {
  return {
    quotesList: state.quotesList,
    imagesList: state.imagesList
  }
}

export default connect(mapStateToProps)(AllQuotes);