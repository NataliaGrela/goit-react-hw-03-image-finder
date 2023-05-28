import { Component } from 'react';
import * as basicLightbox from 'basiclightbox';

class Modal extends Component {
  componentDidMount() {
    const instance = basicLightbox.create(`
    <div>
       <img src="${this.props.image}"/>
    </div>
`);

    instance.show();
    console.log('vvv');
  }

  render() {
    return null
    // <div className="Overlay">{/* zmienić nazwę class */}</div>;
  }
}

export default Modal;
