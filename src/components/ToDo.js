import React, { Component } from 'react';

import ToDoItem from './ToDoItem';

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
      allItems: [...this.state.allItems, this.state.userInput],
      userInput: '',
    })
  }
  removeItem = (id) => {
    let newList = [...this.state.allItems]
    newList.splice(id, 1);
    this.setState({
      allItems: newList
    })
  }

  render() {
    let itemsList = this.state.allItems.map((e, i) => <ToDoItem key={i} id={i} text={e} removeItem={this.removeItem} />)
    return (
      <div>
        <div>
          <form onSubmit={this.addItem} className="todo-input">
            <input placeholder="what's next?" onChange={this.handleInput} value={this.state.userInput} className="todo-input-field"></input>
            <button type="submit" onSubmit={this.addItem} className="font-size-light button-light">Add to list!</button>
          </form>
        </div>
        <div className="todo-container">
          {itemsList}
        </div>
      </div>
    )
  }
}

export default ToDo;