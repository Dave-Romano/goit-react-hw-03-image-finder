import React, { Component } from 'react';
import { SearchbarStyled } from './SearchbarStyled';
import { FaSearch } from 'react-icons/fa';

class Searchbar extends Component {
  state = {
    searchWord: '',
  };

  handleChange = e => {
    this.setState({ searchWord: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchWord.trim() === '') {
      return alert('please enter search word');
    }
    this.props.handleFormSubmitt(this.state.searchWord);
    this.setState({ searchWord: '' });
  };

  render() {
    return (
      <SearchbarStyled>
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="buttonSearch">
            <FaSearch className="faSearch" />
          </button>
          <input
            value={this.state.searchWord}
            className="searchInput"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="search images"
            onChange={this.handleChange}
          ></input>
        </form>
      </SearchbarStyled>
    );
  }
}

export default Searchbar;
