import React, { Component } from 'react';

class ToDo extends Component {
  constructor() {
    super()
    this.state = {
      allItems: [],
      userInput: '',
    }
  }

handleInput = (e) => {
  this.setState({
    userInput: e.target.value,
  })
}
addItem = (e) => {
  e.preventDefault();
  this.setState({
    allItems: [ ...this.state.allItems, this.state.userInput],
    userInput: '',
  })
}


  render() {
  let itemsList = this.state.allItems.map((e, i) => {
    return (
      <p key={i}>{e}</p>
    )
  })
    
    return (
      <div>
        {itemsList}
        <div>
          <form onSubmit={this.addItem}>
          <input placeholder="what's next?" onChange={this.handleInput} value={this.state.userInput}></input>
            <button type="submit" onSubmit={this.addItem}>[+] add to list</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ToDo;