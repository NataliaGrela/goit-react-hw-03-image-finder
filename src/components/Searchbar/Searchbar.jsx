import { Component } from 'react';
import searchIcon from '../svg/symbol.defs.svg';

class SearchBar extends Component {
  state = {
    query: '',
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const { onSearch } = this.props;
    onSearch && onSearch(this.state.query);
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ query: value });
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="searchform">
          <button type="submit" className="searchform-button">
            <svg className="icon" id="icon-search">
              <use href={searchIcon + '#icon-search'}></use>
            </svg>
            <span className="searchform-button-label">Search</span>
          </button>

          <input
            onChange={this.handleChange}
            className="searchform-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
