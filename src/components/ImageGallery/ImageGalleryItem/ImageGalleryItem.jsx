import { Component } from 'react';

class ImageGalleryItem extends Component {
  handleClick=()=> {
    const {onClick, largeImageURL} = this.props
    onClick && onClick(largeImageURL)
  }
  render() {
    return (
      <li onClick={this.handleClick} className="image-gallery-item">
        <img
          className="image-gallery-item-image"
          src={this.props.image}
          alt="gallery"
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
