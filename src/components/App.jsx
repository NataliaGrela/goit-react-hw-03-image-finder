import { Component } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import SearchBar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import Notiflix from 'notiflix';
import axios from 'axios';


const API_URL = 'https://pixabay.com/api';
const API_KEY = '34752040-45bcd231572a27f770c5128af';
// const PARAMS = `?key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=`;

class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    error: null,
    currentImage: null,
  };

  async componentDidMount() {
    const { page, query } = this.state;
    this.setState({ isLoading: true });
    const images = await this.getImages(page, query);
    this.setState({ images: images.hits, isLoading: false });
  }
  getImages = async (page, query) => {
    const endPoint =
      API_URL +
      `/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;
    const response = await axios.get(endPoint);
    if (response.status !== 200) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return {};
    }

    const { data } = response;
    return data;
  };

  handleSearch = async query => {
    this.setState({ isLoading: true });
    const images = await this.getImages(1, query);
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
    const images = await this.getImages(page + 1, query);
    this.setState({
      images: [...this.state.images, ...images.hits],
      page: page + 1,
      isLoading: false,
    });
  };

  handleClickImage = image => {
    // this.setState({ Modal: <Modal image={image}></Modal> });
    this.setState({ currentImage: image });
  };

  render() {
    // console.log(this.state);

    return (
      <div className="app">
        <SearchBar onSearch={this.handleSearch}></SearchBar>

        <ImageGallery
          onClick={this.handleClickImage}
          images={this.state.images}
          page={this.state.page}
          query={this.state.query}
        />

        {this.state.isLoading ? (
          <Loader></Loader>
        ) : (
          <Button setPage={this.handleLoadMore}>Load more</Button>
        )}
        {/* {this.state.Modal} */}
        <Modal image={this.state.currentImage}></Modal>
      </div>
    );
  }
}

export default App;
