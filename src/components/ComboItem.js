import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import axios from 'axios';
import { connect } from 'react-redux';
import { ToastContainer, ToastStore } from 'react-toasts';
import Switch from "react-switch";


import SingleComment from './SingleComments';

class ComboItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      commentOpen: false,
      modalButtonActive: false,
      cursorSelect: false,
      userCommentContent: '',
      comments: [],
      likeActive: [],
      commentInputRows: 1,
      theme: false
    }
  }

  onOpenModal = () => {
    this.setState({
      open: true,
      commentOpen: false
    });
    this.getAllComments();
  };
  onCloseModal = () => {
    this.setState({
      open: false
    });
  };
  onCloseCommentModal = () => {
    this.setState({
      commentOpen: false
    });
  };
  toggleStyle = () => {
    document.getElementById(`combo-id-${this.props.id}-img`).classList.toggle('cursor-select')
  }
  heartButtonActive = (e) => {
    e.target.classList.toggle('fas')
  }
  commentQuote = () => {
    this.setState({
      commentOpen: !this.state.commentOpen
    })
  }
  changeCommentRows = () => {
    this.setState({
      commentInputRows: 3
    })
  }
  themeChange = () => {
    this.setState({
      theme: !this.state.theme
    })
  }
  handleCommentInput = (e) => {
    if (e.which === 13 && !e.shiftKey) {
      e.target.form.dispatchEvent(new Event("submit", { cancelable: true }))
      e.preventDefault();
    }
    document.getElementById("user-comment").addEventListener("keypress", this.handleCommentInput);
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
        this.getAllComments();
        ToastStore.success('Thanks! Comment submitted! 😎')
      }).catch(error => {
        ToastStore.error("Oops... something went wrong. We're on it! 😢")
        console.log(error)
      })
    } else {
      ToastStore.error('Please login to comment. 😜')
    }
    this.setState({
      userCommentContent: '',
      commentInputRows: 1
    })
  }
  getAllComments = () => {
    let photoId = this.props.photoId
    axios.get(`/api/comments?photoId=${photoId}`).then(result => {
      let newStateComments = []
      for (let i = 0; i < result.data.length; i++) {
        newStateComments.push({ commentContent: result.data[i].content, userName: result.data[i].name, userPicture: result.data[i].picture, id: result.data[i].id, photoId: result.data[i].photo_id, renderMe: true })
      }
      this.setState(state => {
        if (state.comments.length !== newStateComments.length) {
          state.comments = newStateComments
          return state
        }
        else {
          return state;
        }
      })
    }).catch(error => console.log(error))
  }
  deleteComment = (commentId, photoId) => {
    let newState = [...this.state.comments]
    for (let i = 0; i < newState.length; i++) {
      if (newState[i].id === commentId) {
        newState[i].renderMe = false
      }
    }
    this.setState({
      comments: newState
    })
    axios.delete(`/api/comment?commentId=${commentId}&photoId=${photoId}`).then((result) => {
      this.getAllComments()
    }).catch(error => console.log(error))
  }
  likeCombo = (e) => {
    console.log('hit')
    let tgt = e.target;
    let active = [];
    active.push(e)
    this.setState({
      likeActive: active
    })
    setTimeout(() => {
      if (this.state.likeActive.length > 0) {
        let newState = [...this.state.likeActive]
        newState.pop()
        this.setState({
          likeActive: newState
        })
      }
    }, 250)
    if (this.state.likeActive.length) {
      tgt.classList.toggle("fa-heart-beat")
      axios.put(`/api/favorite?userId=${this.props.user.id}&photoId=${this.props.photoId}&quote=${this.props.quote}&theme=${this.state.theme}`).then(result => {
      })
    }
    if (tgt.classList.contains("fa-heart-beat")) {
      setTimeout(() => {
        tgt.classList.toggle("fa-heart-beat")
      }, 500)
    }
  }

  render() {
    const { open } = this.state;
    const { commentOpen } = this.state;
    let filteredComments = this.state.comments.filter((e) => e.renderMe);
    let allComments = filteredComments.map((e) => {
      return (
        <SingleComment
          content={e.commentContent}
          name={e.userName}
          picture={e.userPicture}
          id={e.id}
          renderMe={e.renderMe}
          photoId={e.photoId}
          buttonActive={this.buttonActive}
          deleteMe={this.deleteComment}
        />
      )
    })
    const commentModalStyles = {
      overlay: "comment-modal-right-overlay",
      modal: "comment-modal-right-content"
    }
    const imageModalStyles = {
      overlay: "image-modal-center-overlay",
      closeIcon: "image-modal-center-close"
    }

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
          onMouseDown={window.innerWidth > 500 ? this.onOpenModal : this.likeCombo}
          id={`combo-id-${this.props.id}-img`}
        />
        {
          window.innerWidth > 500
            ?
            <Modal
              open={open}
              onClose={this.onCloseModal}
              center="true"
              closeOnEsc
              classNames={imageModalStyles}
            >
              <div className="modal-image-cont" onClick={e => e.stopPropagation()}>
                <img src={this.props.imgsrc} className="modal-image" id={`combo-id-${this.props.id}-img`} icon="comment-icon" />
                {
                  this.props.favorites
                    ?
                    <div className="modal-quote-light">
                      <p
                        className=
                        {
                          this.props.theme
                            ?
                            "font-size-plus-dark"
                            :
                            "font-size-plus-light"
                        }>
                        {this.props.quote}
                      </p>
                    </div>
                    :
                    <div className="modal-quote-light">
                      <p
                        className=
                        {
                          this.state.theme
                            ?
                            "font-size-plus-dark"
                            :
                            "font-size-plus-light"
                        }>
                        {this.props.quote}
                      </p>
                      <Switch
                        onChange={this.themeChange}
                        checked={this.state.theme}
                        className="modal-theme-switch"
                        onColor="#888888"
                        onHandleColor="#111111"
                        handleDiameter={25}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={15}
                        width={40} />
                    </div>
                }
                <i
                  id="comment-icon"
                  className="fas fa-pen"
                  onMouseEnter={this.buttonActive}
                  onMouseLeave={this.buttonActive}
                  onMouseDown={this.commentQuote}
                ></i>
                <i
                  className="fas fa-heart"
                  onMouseDown={this.likeCombo}
                ></i>
                <ToastContainer store={ToastStore} position={ToastContainer.POSITION.BOTTOM_RIGHT} />
              </div>
            </Modal>
            :
            <div>
              {
                this.props.favorites
                  ?
                  <div className="modal-quote-light">
                    <p
                      className=
                      {
                        this.props.theme
                          ?
                          "font-size-plus-dark"
                          :
                          "font-size-plus-light"
                      }>
                      <i
                        className="fas fa-heart cover"
                        onMouseDown={this.likeCombo}
                      ></i>
                      {this.props.quote}
                    </p>
                  </div>
                  :
                  <div className="modal-quote-light">
                    <p
                      className=
                      {
                        this.state.theme
                          ?
                          "font-size-plus-dark"
                          :
                          "font-size-plus-light"
                      }>
                      <i
                        className="fas fa-heart cover"
                        onMouseDown={this.likeCombo}
                      ></i>
                      {this.props.quote}
                    </p>
                    <Switch
                      onChange={this.themeChange}
                      checked={this.state.theme}
                      className="modal-theme-switch"
                      onColor="#888888"
                      onHandleColor="#111111"
                      handleDiameter={25}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                      height={15}
                      width={40} />
                  </div>
              }
            </div>
        }
        <Modal
          open={commentOpen && open}
          onClose={this.onCloseCommentModal}
          closeOnEsc
          center="false"
          classNames={commentModalStyles}
        >
          {
            allComments.length
              ?
              <div className="modal-comment-cont" onClick={e => e.stopPropagation()}>

                {
                  allComments
                }
                <form id="modal-user-comment" className="modal-comment" onSubmit={this.submitComment}>
                  <textarea rows={this.state.commentInputRows} cols="30" id="user-comment" className="modal-comment-input font-size-light" onChange={this.handleCommentInput} value={this.state.userCommentContent} onMouseDown={this.changeCommentRows}><input /></textarea>
                  <button type="submit" onSubmit={this.submitComment}>Submit</button>
                </form>
              </div>
              :
              <div className="modal-comment-cont" onClick={e => e.stopPropagation()}>
                <p className="font-size-plus-dark no-comments">No comments yet. 🤔<br /> Be the first!</p>
                <form id="modal-user-comment" className="modal-comment" onSubmit={this.submitComment}>
                  <textarea rows={this.state.commentInputRows} cols="30" id="user-comment" className="modal-comment-input font-size-light" onChange={this.handleCommentInput} value={this.state.userCommentContent} onMouseDown={this.changeCommentRows}><input /></textarea>
                  <button type="submit" onSubmit={this.submitComment}>Submit</button>
                </form>
              </div>
          }
        </Modal>
        <div
          className="quotes-grid-text font-size-plus-light"
          onMouseEnter={() => this.setState({ modalButtonActive: true })}
          onMouseLeave={() => this.setState({ modalButtonActive: false })}
          onMouseEnter={this.toggleStyle}
          onMouseLeave={this.toggleStyle}
          id={`combo-id-${this.props.id}-txt`}
        >{window.innerWidth > 500 ? this.props.quote : null}</div>
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