import { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button className="button" onClick={this.props.setPage}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
