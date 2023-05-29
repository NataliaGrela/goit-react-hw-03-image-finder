import PropTypes from 'prop-types';
import React from 'react';
import { Component } from 'react';
import { createPortal } from 'react-dom';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleClose, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', null, false);
  }

  handleClose = e => {
    const element = e.target;
    if (element.className === 'overlay' || e.key === 'Escape') {
      const { onClose } = this.props;
      onClose && onClose();
    }
  };

  render() {
    return (
      this.props.isOpen &&
      createPortal(
        <aside>
          <div class="overlay" onClick={this.handleClose}>
            <div class="modal">
              <img src={this.props.image} alt="pic" />
            </div>
          </div>
        </aside>,
        document.body
      )
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
