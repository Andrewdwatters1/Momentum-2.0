import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

class ComboItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      modalButtonActive: false,
      cursorSelect: false,
    }
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };
  toggleStyle = () => {
    document.getElementById(`combo-id-${this.props.id}`).classList.toggle('magnify')
  }
  editButtonActive = (e) => {
    e.target.classList.toggle('fas')
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
          id={`combo-id-${this.props.id}`}
        />
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="modal-image-cont">
            <img src={this.props.imgsrc} className="modal-image" />
            <div>
              <i className="far fa-edit" onMouseEnter={this.editButtonActive} onMouseLeave={this.editButtonActive}></i>
              <i class="far fa-heart" onMouseEnter={this.editButtonActive} onMouseLeave={this.editButtonActive}></i>
              <i class="far fa-trash-alt" onMouseEnter={this.editButtonActive} onMouseLeave={this.editButtonActive}></i>
              {/* <i class="far fa-plus-square" onMouseEnter={this.editButtonActive} onMouseLeave={this.editButtonActive}></i>  */} 
              {/* USER CAN ALREADY SUBMIT PHOTOS/QUOTES */}
            </div>
          </div>
        </Modal>
        <div
          className="quotes-grid-text"
          onMouseEnter={() => this.setState({ modalButtonActive: true })}
          onMouseLeave={() => this.setState({ modalButtonActive: false })}
          onMouseEnter={this.toggleStyle}
          onMouseLeave={this.toggleStyle}
        >{this.props.quote}</div>
      </div>
    )
  }
}

export default ComboItem;