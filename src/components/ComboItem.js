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
  toggleStyle = (e) => {
    e.target.classList.toggle('magnify')
  }

  render() {
    const { open } = this.state;
    return (
      <div className="quotes-grid-item">
        <img
          src={this.props.imgsrc}
          alt="Oops, something went wrong :("
          className="quotes-grid-image"
          onMouseEnter={() => this.setState({ modalButtonActive: true })}
          onMouseLeave={() => this.setState({ modalButtonActive: false })}
          onMouseEnter={this.toggleStyle}
          onMouseLeave={this.toggleStyle}
          onMouseDown={this.onOpenModal}
        />
        <Modal open={open} onClose={this.onCloseModal} center>
          Testing
        </Modal>
        <div
          className="quotes-grid-text"
          onMouseEnter={() => this.setState({ modalButtonActive: true })}
          onMouseLeave={() => this.setState({ modalButtonActive: false })}
        >{this.props.quote}</div>
      </div>
    )
  }
}

export default ComboItem;