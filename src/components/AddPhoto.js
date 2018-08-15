import React, { Component } from 'react';

class AddPhoto extends Component {
  constructor() {
    super()
    this.state = {
      url: '',
      photographer: '',
      portfolio: '',
      location: '',
    }
  }

  urlChange = (e) => {
    this.setState({
      url: e.target.value
    })
  }
  photographerChange = (e) => {
    this.setState({
      photographer: e.target.value
    })
  }
  portfolioChange = (e) => {
    this.setState({
      portfolio: e.target.value
    })
  }
  locationChange = (e) => {
    this.setState({
      location: e.target.value
    })
  }

  submitPhoto = (e) => {
    e.preventDefault();
    console.log(this.state)
    // needs to call post and add to DB
    // Toast them thanking them for the submission
  }


  render() {
    return(
      <div>
        <form onSubmit={this.submitPhoto}>
          Photo Url: <input placeholder="www.website.com" onChange={this.urlChange} value={this.state.url}></input>
          Photographer: <input placeholder="first, last, m" onChange={this.photographerChange} value={this.state.photographer}></input>
          Portfolio Site: <input placeholder="www.portfolio.com" onChange={this.portfolioChange} value={this.state.portfolio}></input>
          Photo Location: <input placeholder="name, city, country" onChange={this.locationChange} value={this.state.location}></input>
          <button type="submit" onSubmit={this.submitPhoto}>[+] Submit Photo</button>
        </form>
      </div>
    )
  }
}

export default AddPhoto;