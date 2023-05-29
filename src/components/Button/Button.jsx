import PropTypes from 'prop-types';
import { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div className="button-container">
        <button className="button" onClick={this.props.setPage}>
          {this.props.children}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  setPage: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
