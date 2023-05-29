import PropTypes from 'prop-types';
import { Component } from 'react';

class ImageGalleryItem extends Component {
  handleClick = () => {
    const { onClick, largeImageURL } = this.props;
    onClick && onClick(largeImageURL);
  };
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

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
