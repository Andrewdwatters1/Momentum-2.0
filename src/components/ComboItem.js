import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import axios from 'axios';
import { connect } from 'react-redux';
import { ToastContainer, ToastStore } from 'react-toasts';

import SingleComment from './SingleComments';

class ComboItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      modalButtonActive: false,
      cursorSelect: false,
      userCommentContent: '',
      comments: [],
      likeActive: []
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
    document.getElementById(`combo-id-${this.props.id}-img`).classList.toggle('cursor-select')
  }
  heartButtonActive = (e) => {
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
        ToastStore.error("Oops... something went wrong. We're on it! 😢")
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
        newStateComments.push({ commentContent: result.data[i].content, userName: result.data[i].name, userPicture: result.data[i].picture, id: result.data[i].id, photoId: result.data[i].photo_id, renderMe: true })
      }
      this.setState(state => {
        if (state.comments.length < newStateComments.length) {
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
    axios.delete(`/api/comment?commendId=${commentId}&photoId=${photoId}`).then(() => {
    }).catch(error => console.log(error))
  }

  addToFavorites = (e) => {
    let tgt = e.target;
    let active = [];
    active.push(e)
    this.setState({
      likeActive: active
    })
    setTimeout(() => {
      if(this.state.likeActive.length > 0) {
       let newState = [ ...this.state.likeActive]
       newState.pop()
        this.setState({
          likeActive: newState
        })
      }
    }, 250)
    console.log(this.state.likeActive.length);
    if(this.state.likeActive.length) {
      tgt.classList.toggle("fa-heart-beat")
      console.log(this.props.photoId) //yes
      console.log(this.props.user.id) //yes
      console.log(this.props.quote)
      axios.put(`/api/favorite?userId=${this.props.user.id}&photoId=${this.props.photoId}&quote=${this.props.quote}`).then(result => {
        console.log(result)
      })
    }
    if(tgt.classList.contains("fa-heart-beat")) {
      setTimeout(() => {
        tgt.classList.toggle("fa-heart-beat")
      }, 500)
    }
  }
  render() {
    const { open } = this.state;
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
            <p className="modal-quote">{this.props.quote}</p>
            <div>
              {
                allComments
              }
              <form id="modal-user-comment" className="modal-comment" onSubmit={this.submitComment}>
                <input onChange={this.handleCommentInput} value={this.state.userCommentContent} />
                <button type="submit" onSubmit={this.submitComment}>Submit Comment</button>
              </form>
              </div>
              <i
                className="far fa-edit"
                onMouseEnter={this.buttonActive}
                onMouseLeave={this.buttonActive}
                onMouseDown={this.commentQuote}
              ></i>
              <i
                className="fas fa-heart"
                onMouseDown={this.addToFavorites}
              ></i>
              <ToastContainer store={ToastStore} position={ToastContainer.POSITION.BOTTOM_RIGHT} />
          </div>
        </Modal>
        <div
          className="quotes-grid-text font-size-plus-light"
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

// import React, { Component } from 'react';
// import Modal from 'react-responsive-modal';
// import axios from 'axios';
// import { connect } from 'react-redux';
// import { ToastContainer, ToastStore } from 'react-toasts';

// import SingleComment from './SingleComments';

// class ComboItem extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       open: false,
//       modalButtonActive: false,
//       cursorSelect: false,
//       userCommentContent: '',
//       comments: [],
//       likeActive: []
//     }
//   }

//   onOpenModal = () => {
//     this.setState({ open: true });
//     this.getAllComments();
//   };
//   onCloseModal = () => {
//     this.setState({ open: false });
//   };
//   toggleStyle = () => {
//     document.getElementById(`combo-id-${this.props.id}-img`).classList.toggle('cursor-select')
//   }
//   heartButtonActive = (e) => {
//     e.target.classList.toggle('fas')
//   }
//   commentQuote = () => {
//     document.getElementById("modal-user-comment").classList.toggle("modal-comment-active")
//   }
//   handleCommentInput = (e) => {
//     this.setState({
//       userCommentContent: e.target.value
//     })
//   }
//   submitComment = (e) => {
//     e.preventDefault();
//     if (this.props.user) {
//       let comment = {
//         content: this.state.userCommentContent,
//         userId: this.props.user.id,
//         photoId: this.props.photoId,
//       }
//       axios.post('/api/comment', { comment }).then(result => {
//         ToastStore.success('Thanks! Comment submitted! 😎')
//       }).catch(error => {
//         ToastStore.error("Oops... something went wrong. We're on it! 😢")
//         console.log(error)
//       })
//     } else {
//       ToastStore.error('Please login to comment. 😜')
//     }
//     this.setState({
//       userCommentContent: ''
//     })
//     this.getAllComments();
//   }
//   getAllComments = () => {
//     let photoId = this.props.photoId
//     axios.get(`/api/comments?photoId=${photoId}`).then(result => {
//       let newStateComments = []
//       for (let i = 0; i < result.data.length; i++) {
//         newStateComments.push({ commentContent: result.data[i].content, userName: result.data[i].name, userPicture: result.data[i].picture, id: result.data[i].id, photoId: result.data[i].photo_id, renderMe: true })
//       }
//       this.setState(state => {
//         if (state.comments.length < newStateComments.length) {
//           state.comments = newStateComments
//           return state
//         }
//         else {
//           return state;
//         }
//       })
//     }).catch(error => console.log(error))
//   }
//   deleteComment = (commentId, photoId) => {
//     let newState = [...this.state.comments]
//     for (let i = 0; i < newState.length; i++) {
//       if (newState[i].id === commentId) {
//         newState[i].renderMe = false
//       }
//     }
//     this.setState({
//       comments: newState
//     })
//     axios.delete(`/api/comment?commendId=${commentId}&photoId=${photoId}`).then(() => {
//     }).catch(error => console.log(error))
//   }

//   addToFavorites = (e) => {
//     let tgt = e.target;
//     let active = [];
//     active.push(e)
//     this.setState({
//       likeActive: active
//     })
//     setTimeout(() => {
//       if(this.state.likeActive.length > 0) {
//        let newState = [ ...this.state.likeActive]
//        newState.pop()
//         this.setState({
//           likeActive: newState
//         })
//       }
//     }, 250)
//     console.log(this.state.likeActive.length);
//     if(this.state.likeActive.length) {
//       tgt.classList.toggle("fa-heart-beat")
//       console.log(this.props.photoId) //yes
//       console.log(this.props.user.id) //yes
//       console.log(this.props.quote)
//       axios.put(`/api/favorite?userId=${this.props.user.id}&photoId=${this.props.photoId}&quote=${this.props.quote}`).then(result => {
//         console.log(result)
//       })
//     }
//     if(tgt.classList.contains("fa-heart-beat")) {
//       setTimeout(() => {
//         tgt.classList.toggle("fa-heart-beat")
//       }, 500)
//     }
//   }
//   render() {
//     const { open } = this.state;
//     let filteredComments = this.state.comments.filter((e) => e.renderMe);
//     let allComments = filteredComments.map((e) => {
//       return (
//         <SingleComment
//           content={e.commentContent}
//           name={e.userName}
//           picture={e.userPicture}
//           id={e.id}
//           renderMe={e.renderMe}
//           photoId={e.photoId}
//           buttonActive={this.buttonActive}
//           deleteMe={this.deleteComment}
//         />
//       )
//     })

//     return (
//       <div className="quotes-grid-item">
//         <img
//           src={this.props.imgsrc}
//           alt={"Oops, something went wrong :("}
//           className="quotes-grid-image"
//           onMouseEnter={() => this.setState({ modalButtonActive: true })}
//           onMouseLeave={() => this.setState({ modalButtonActive: false })}
//           onMouseEnter={this.toggleStyle}
//           onMouseLeave={this.toggleStyle}
//           onMouseDown={this.onOpenModal}
//           id={`combo-id-${this.props.id}-img`}
//         />
//         <Modal open={open} onClose={this.onCloseModal} center>
//           <div className="modal-image-cont">
//             <img src={this.props.imgsrc} className="modal-image" id={`combo-id-${this.props.id}-img`} />
//               <p className="modal-quote modal-cover-image">{this.props.quote}<br/><br/><br/><br/></p>
//             <div>
//               {
//                 allComments
//               }
//               <form id="modal-user-comment" className="modal-comment" onSubmit={this.submitComment}>
//                 <input onChange={this.handleCommentInput} value={this.state.userCommentContent} />
//                 <button type="submit" onSubmit={this.submitComment}>Submit Comment</button>
//               </form>
//               <i
//                 className="far fa-edit"
//                 onMouseEnter={this.buttonActive}
//                 onMouseLeave={this.buttonActive}
//                 onMouseDown={this.commentQuote}
//               ></i>
//               <i
//                 className="fas fa-heart modal-cover-image"
//                 onMouseDown={this.addToFavorites}
//               ></i>
//               <ToastContainer store={ToastStore} position={ToastContainer.POSITION.BOTTOM_RIGHT} />
//             </div>
//           </div>
//         </Modal>
//         <div
//           className="quotes-grid-text font-size-plus-light"
//           onMouseEnter={() => this.setState({ modalButtonActive: true })}
//           onMouseLeave={() => this.setState({ modalButtonActive: false })}
//           onMouseEnter={this.toggleStyle}
//           onMouseLeave={this.toggleStyle}
//           id={`combo-id-${this.props.id}-txt`}
//         >{this.props.quote}</div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     user: state.userInfo
//   }
// }

// export default connect(mapStateToProps)(ComboItem);