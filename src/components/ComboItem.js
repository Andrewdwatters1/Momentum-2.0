import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

class ComboItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="quotes-grid-item">
        <img src={this.props.imgsrc} alt="Oops, something went wrong :(" className="quotes-grid-image"/>
        <div className="quotes-grid-modal-button">
        <button onClick={this.onOpenModal} className="quotes-grid-modal-button">+</button>
        </div>
        <Modal open={open} onClose={this.onCloseModal} center>
          Testing
        </Modal>
        <div className="quotes-grid-text">{this.props.quote}</div>
      </div>
    )
  }
}

export default ComboItem;