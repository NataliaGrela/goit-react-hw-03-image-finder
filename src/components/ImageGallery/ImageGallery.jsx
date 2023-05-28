import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

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

export default ImageGallery;
