import React, { Component } from 'react';
import axios from 'axios';

class SingleComment extends Component {
  constructor(props) {
    super(props)
  }
  
  deleteComment = () => {
    axios.delete(`/api/comment?commendId=${this.props.id}&photoId=${this.props.photoId}`).then(result => {
      this.props.deleteComment(this.props.id)
    })
  }

  render() {
    return (
      <div className="red-top">
        <p>{this.props.content}</p>
        <p>{this.props.name}</p>
        <p>{this.props.picture}</p>
        <i
          className="far fa-trash-alt"
          onMouseEnter={this.props.buttonActive}
          onMouseLeave={this.props.buttonActive}
          onMouseDown={this.deleteComment}
        ></i>
      </div>
    )
  }
  // componentWillUnmount() {
  // }
}

export default SingleComment;