import React, { Component } from 'react';
import axios from 'axios';

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
  submitPhoto = (e) => {
    e.preventDefault();
    // console.log(this.state)
    // needs to call post and add to DB
    // Toast them thanking them for the submission

    // ***********************************************
    //  USE THIS THIS ONLY TO POPULATE DB WITH QUOTES, DELETE THIS ONCE DONE
    // ***********************************************
    axios.get('https://talaikis.com/api/quotes/').then(result => {
      setTimeout(function() {
        for(let i = 0; i < 50; i++) {
          let quoteObj = {
            author: result.data[i].author,
            quote: result.data[i].quote,
            category: result.data[i].category
          } 
          axios.post('/api/quote', {quoteObj}).then(result => {
            console.log('added quote', result.data)
          })
        }
      }, 100)
    })
    
    let search = 'sunset';
    axios.get(`https://api.unsplash.com/photos/random?client_id=5ed61707f778d0b6915e1cb34046b4a57e1c445bc003d5d11218f347770c3ae4&query=${search}&orientation=squarish&count=10`).then(result => {
      console.log(result.data)
      for (let i = 0; i < result.data.length; i++) {
        let photoObj = {
          url: result.data[i].urls.regular,
          photographer: result.data[i].user.name,
          portfolio: result.data[i].user.portfolio_url,
          location: result.data[i].location.title
        }
        axios.post('/api/photo', { photoObj }).then(result => {
          console.log('added to db', result.data)
        })
      }
    })
    // ***********************************************
    //  USE THIS THIS ONLY TO POPULATE DB WITH QUOTES, DELETE THIS ONCE DONE
    // ***********************************************
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