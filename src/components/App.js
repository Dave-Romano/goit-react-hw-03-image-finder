import React, { Component } from 'react';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './imageGallery/ImageGallery';

class App extends Component {
  state = {
    searchWord: '',
  };

  handleFormSubmit = searchWord => {
    this.setState({ searchWord });
  };

  render() {
    return (
      <>
        <Searchbar handleFormSubmitt={this.handleFormSubmit} />
        <ImageGallery searchWord={this.state.searchWord} />
      </>
    );
  }
}
export default App;
