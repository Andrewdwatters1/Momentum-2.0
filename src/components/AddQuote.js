import React, { Component } from 'react';

class AddQuote extends Component {
  constructor() {
    super() 
    this.state ={
      author: '',
      quoteContent: '',
      category: ''
    }
  }

authorChange = (e) => {
  this.setState({
    author: e.target.value
  })
}
quoteContentChange = (e) => {
  this.setState({
    quoteContent: e.target.value
  })
}
categoryChange = (e) => {
  this.setState({
    category: e.target.value
  })
}
submitPhoto = (e) => {
  e.preventDefault();
  console.log(this.state)
  // needs to call post and add to DB
  // Toast them thanking them for the submission
}

  render() {
    return (
      <div>
        <form onSubmit={this.submitPhoto}>
          Author: <input placeholder="first, last, m" onChange={this.authorChange} value={this.state.author}></input>
          Quote: <input placeholder='"wherefore art thou..."' onChange={this.quoteContentChange} value={this.state.quoteContent}></input>
          Category: <input placeholder="category" onChange={this.categoryChange} value={this.state.category}></input>
          <button type="submit" onSubmit={this.submitQuote}>[+] Submit Quote</button>
        </form>
      </div>
    )
  }
}

export default AddQuote;