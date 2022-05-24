// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         textTransform: 'uppercase',
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import React, { Component } from 'react';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './imageGallery/ImageGallery';
import Button from './button/Button';
import Loader from './loader/Loader';
// import Modal from './modal/Modal';

class App extends Component {
  state = {
    imageRequest: '',
  };

  handleFormSubmit = searchRequest => {
    this.setState({ imageRequest: searchRequest });
    console.log(searchRequest);
  };

  render() {
    return (
      <>
        <Searchbar handleFormSubmitt={this.handleFormSubmit} />
        <ImageGallery searchItem={this.state.imageRequest} />
        <Button type="button" />
        <Loader />
        {/* <Modal /> */}
      </>
    );
  }
}
export default App;
