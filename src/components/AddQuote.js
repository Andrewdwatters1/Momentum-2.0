import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, ToastStore } from 'react-toasts';

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
  submitQuote = (e) => { // 
    e.preventDefault();
    axios.get('https://talaikis.com/api/quotes/').then(result => {
      console.log(result)
      setTimeout(function () {
        for (let i = 0; i < 100; i++) {
          let quoteObj = {
            author: result.data[i].author,
            quote: result.data[i].quote,
            category: result.data[i].cat
          }
          axios.post('/api/quote', { quoteObj }).then(result => {
            console.log('added quote', result.data)
          })
        }
      }, 10)
    })
  }

  render() {
    return (
      <div>
        <ToastContainer store={ToastStore} position={ToastContainer.POSITION.BOTTOM_RIGHT} />
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