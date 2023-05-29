import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';

class ImageGallery extends Component {
  handleClick = image => {
    const { onClick } = this.props;
    onClick && onClick(image);
  };

  render() {
    return (
      <ul className="image-gallery">
        {this.props.images.map(item => (
          <ImageGalleryItem
            onClick={this.handleClick}
            largeImageURL={item.largeImageURL}
            image={item.webformatURL}
            key={item.id}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  query: PropTypes.string.isRequired,
};

export default ImageGallery;
