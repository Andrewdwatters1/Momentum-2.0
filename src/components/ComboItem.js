import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import axios from 'axios';

class ComboItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      modalButtonActive: false,
      cursorSelect: false,
      userCommentContent: '',
    }
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };
  toggleStyle = () => {
    document.getElementById(`combo-id-${this.props.id}-img`).classList.toggle('magnify')
  }
  editButtonActive = (e) => {
    e.target.classList.toggle('fas')
    e.target.disabled = 'false'; 
  }
  commentQuote = () => {
    document.getElementById("modal-user-comment").classList.toggle("modal-comment-active")
  }
  handleCommentInput = (e) => {
    this.setState({
      userCommentContent: e.target.value
    })
  }
  submitComment = (e) => {
    e.preventDefault();
    let comment = {
      content: this.state.userCommentContent,
      photo: 13,
      user: 1 // will be req.session.user.id
    }
    axios.post('/api/combo', {comment}).then(result => {
      // toast user w/ "Comment Submitted"
      console.log(result)
    })
  }
  render() {
    const { open } = this.state;
    return (
      <div className="quotes-grid-item">
        <img
          src={this.props.imgsrc}
          alt={"Oops, something went wrong :("}
          className="quotes-grid-image"
          onMouseEnter={() => this.setState({ modalButtonActive: true })}
          onMouseLeave={() => this.setState({ modalButtonActive: false })}
          onMouseEnter={this.toggleStyle}
          onMouseLeave={this.toggleStyle}
          onMouseDown={this.onOpenModal}
          id={`combo-id-${this.props.id}-img`}
        />
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="modal-image-cont">
            <img src={this.props.imgsrc} className="modal-image" id={`combo-id-${this.props.id}-img`}/>
            <div>
              <p>{this.props.quote}</p>
              <form onSubmit={this.submitComment}>
                <input display={this.state.userComment} id="modal-user-comment" className="modal-comment" onChange={this.handleCommentInput} value={this.state.userCommentContent}/>
                <button type="submit" onSubmit={this.submitComment}>Submit Comment</button>
              </form>
              <i className="far fa-edit" onMouseEnter={this.editButtonActive} onMouseLeave={this.editButtonActive} disabled="disabled" onMouseDown={this.commentQuote}></i>
              <i class="far fa-heart" onMouseEnter={this.editButtonActive} onMouseLeave={this.editButtonActive} disabled="disabled"></i>
              <i class="far fa-trash-alt" onMouseEnter={this.editButtonActive} onMouseLeave={this.editButtonActive} disabled="disabled"></i> {/* */}
            </div>
          </div>
        </Modal>
        <div
          className="quotes-grid-text"
          onMouseEnter={() => this.setState({ modalButtonActive: true })}
          onMouseLeave={() => this.setState({ modalButtonActive: false })}
          onMouseEnter={this.toggleStyle}
          onMouseLeave={this.toggleStyle}
          id={`combo-id-${this.props.id}-txt`}
        >{this.props.quote}</div>
      </div>
    )
  }
}

export default ComboItem;