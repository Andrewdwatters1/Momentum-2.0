import React, { Component } from 'react';

class SingleComment extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('single comment', this.props)
    return (
      <div className="modal-comment-container">
        <div>
          <img src={this.props.picture} className="modal-comment-image" />
        </div>
        <div className="modal-comment-content-cont">
          <p className="modal-comment-name" >{this.props.name}</p>
          <p className="modal-comment-content">{this.props.content}</p>
          <i
            className="far fa-trash-alt"
            onMouseEnter={this.props.buttonActive}
            onMouseLeave={this.props.buttonActive}
            onMouseDown={() => this.props.deleteMe(this.props.id, this.props.photoId)}
          ></i>
        </div>
      </div>
    )
  }
}

export default SingleComment;