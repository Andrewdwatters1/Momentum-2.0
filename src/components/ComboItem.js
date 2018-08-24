import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import axios from 'axios';
import { connect } from 'react-redux';
import { ToastContainer, ToastStore } from 'react-toasts';

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
  buttonActive = (e) => {
    e.target.classList.toggle('fas')
  }
  commentQuote = () => {
    document.getElementById("modal-user-comment").classList.toggle("modal-comment-active")
    console.log(this.props.photoId)
    console.log(this.props)
  }
  handleCommentInput = (e) => {
    this.setState({
      userCommentContent: e.target.value
    })
  }
  submitComment = (e) => {
    e.preventDefault();
    if(this.props.user) {
      let comment = {
        content: this.state.userCommentContent,
        userId: this.props.user.id,
        photoId: this.props.photoId,
        quote: this.props.quote
      }
      axios.post('/api/combo', { comment }).then(result => {
        ToastStore.success('Comment Submitted')
      }).catch(error => console.log('error in comment submission', error))
    } else {
      ToastStore.error('Please login to comment')
    }
    this.setState({
      userCommentContent: ''
    })
  }
  // addToFavorites = () => {

  // }

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
            <img src={this.props.imgsrc} className="modal-image" id={`combo-id-${this.props.id}-img`} />
            <div>
              <p>{this.props.quote}</p>
              <form id="modal-user-comment" className="modal-comment" onSubmit={this.submitComment}>
                <input onChange={this.handleCommentInput} value={this.state.userCommentContent} />
                <button type="submit" onSubmit={this.submitComment}>Submit Comment</button>
              </form>
              <i className="far fa-edit" onMouseEnter={this.buttonActive} onMouseLeave={this.buttonActive} onMouseDown={this.commentQuote}></i>
              <i class="far fa-heart" onMouseEnter={this.buttonActive} onMouseLeave={this.buttonActive}></i>
              <i class="far fa-trash-alt" onMouseEnter={this.buttonActive} onMouseLeave={this.buttonActive}></i>
              <ToastContainer store={ToastStore} position={ToastContainer.POSITION.BOTTOM_RIGHT} />
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

const mapStateToProps = state => {
  return {
    user: state.userInfo
  }
}

export default connect(mapStateToProps)(ComboItem);