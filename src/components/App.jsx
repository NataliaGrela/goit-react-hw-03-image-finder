import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import SearchBar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import { getImages } from 'api/getImages';
import { Component } from 'react';

class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    error: null,
    currentImage: null,
    openModal: false,
  };

  async componentDidMount() {
    const { page, query } = this.state;
    this.setState({ isLoading: true });
    const images = await getImages(page, query);
    this.setState({ images: images.hits, isLoading: false });
  }

  handleSearch = async query => {
    this.setState({ isLoading: true });
    const images = await getImages(1, query);
    this.setState({
      images: images.hits,
      page: 1,
      query: query,
      isLoading: false,
    });
  };

  handleLoadMore = async () => {
    const { page, query } = this.state;
    this.setState({ isLoading: true });
    const images = await getImages(page + 1, query);
    this.setState({
      images: [...this.state.images, ...images.hits],
      page: page + 1,
      isLoading: false,
    });
  };

  handleClickImage = image => {
    this.setState({ currentImage: image, openModal: true });
  };

  handleCloseModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    return (
      <div className="app">
        <SearchBar onSearch={this.handleSearch} />

        <ImageGallery
          onClick={this.handleClickImage}
          images={this.state.images}
          page={this.state.page}
          query={this.state.query}
        />

        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Button setPage={this.handleLoadMore}>Load more</Button>
        )}

        <Modal
          image={this.state.currentImage}
          isOpen={this.state.openModal}
          onClose={this.handleCloseModal}
        />
      </div>
    );
  }
}

export default App;
