import React, { Component } from 'react';
import axios from 'axios';
import {ToastContainer, ToastStore} from 'react-toasts';

class AddQuote extends Component {
  constructor() {
    super()
    this.state = {
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
  submitQuote = (e) => {
    e.preventDefault();
    let quoteObj = {
      author: this.state.author,
      quote: this.state.quoteContent,
      category: this.state.category
    }
    axios.post('/api/quote', { quoteObj }).then(result => {
      ToastStore.success('Thank you for your submission!  Your quote is under review')
    }).catch(error => ToastStore.error('Oops... something went wrong. :( Our team has been notified.'))
    // Toast them thanking them for the submission
  }


  render() {
    return (
      <div>
        <ToastContainer store={ToastStore} position={ToastContainer.POSITION.BOTTOM_RIGHT}/>
          <form onSubmit={this.submitQuote}>
          Author: <input placeholder="first, last, m" onChange={this.authorChange} value={this.state.author}></input>
          Quote: <input placeholder='"wherefore art thou..."' onChange={this.quoteContentChange} value={this.state.quoteContent}></input>
          Category: <input placeholder="category" onChange={this.categoryChange} value={this.state.category}></input>
          <button type="submit">[+] Submit Quote</button>
        </form>
      </div>
    )
  }
}

export default AddQuote;