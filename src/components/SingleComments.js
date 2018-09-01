import React, { Component } from 'react';

class SingleComment extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('single comment', this.props)
    return (
      <div className="red-top">
        <p>{this.props.content}</p>
        <p>{this.props.name}</p>
        <p>{this.props.picture}</p>
        <i
          className="far fa-trash-alt"
          onMouseEnter={this.props.buttonActive}
          onMouseLeave={this.props.buttonActive}
          onMouseDown={() => this.props.deleteMe(this.props.id, this.props.photoId)}
        ></i>
      </div>
    )
  }
}

export default SingleComment;