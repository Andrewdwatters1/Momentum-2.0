import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

class ComboItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      modalButtonActive: false,
      cursorSelect: false,
      userCanEditQuote: false,
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
  commentQuote = (e) => {
    this.setState({
      userCanEditQuote: !this.state.userCanEditQuote
    })
    document.getElementById(`combo-id-${this.props.id}-txt`).contentEditable = this.state.userCanEditQuote;
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
              <i className="far fa-edit" onMouseEnter={this.editButtonActive} onMouseLeave={this.editButtonActive} disabled="disabled" onMouseDown={this.commentQuote}></i>
              <i class="far fa-heart" onMouseEnter={this.editButtonActive} onMouseLeave={this.editButtonActive} disabled="disabled"></i>
              <i class="far fa-trash-alt" onMouseEnter={this.editButtonActive} onMouseLeave={this.editButtonActive} disabled="disabled"></i>
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