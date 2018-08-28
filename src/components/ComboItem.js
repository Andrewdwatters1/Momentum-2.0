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
      comments: []
    }
  }

  onOpenModal = () => {
    this.setState({ open: true });
    this.getAllComments();
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
  }
  handleCommentInput = (e) => {
    this.setState({
      userCommentContent: e.target.value
    })
  }
  submitComment = (e) => {
    e.preventDefault();
    if (this.props.user) {
      let comment = {
        content: this.state.userCommentContent,
        userId: this.props.user.id,
        photoId: this.props.photoId,
      }
      axios.post('/api/comment', { comment }).then(result => {
        ToastStore.success('Thanks! Comment submitted! 😎')
      }).catch(error => {
        ToastStore.error('Oops... something went wrong. Our team is on it! 😢')
        console.log(error)
      })
    } else {
      ToastStore.error('Please login to comment. 😜')
    }
    this.setState({
      userCommentContent: ''
    })
    this.getAllComments();
  }
  getAllComments = () => {
    let photoId = this.props.photoId
    axios.get(`/api/comments?photoId=${photoId}`).then(result => {
      let newStateComments = []
      for (let i = 0; i < result.data.length; i++) {
        newStateComments.push([result.data[i].content, result.data[i].name, result.data[i].picture])
      }
      this.setState({
        comments: newStateComments
      })
    }).catch(error => {
      ToastStore.error("Sorry, couldn't load comments. 😢")
      console.log(error)
    })
  }
  addToFavorites = () => {

  }

  render() {
    console.log(this.state.comments)
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
              <i class="far fa-heart" onMouseEnter={this.buttonActive} onMouseLeave={this.buttonActive} onMouseDown={this.addToFavorites}></i>
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