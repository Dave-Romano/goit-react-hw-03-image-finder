import { Modal } from 'components/modal/Modal';
import React, { Component } from 'react';
import { ImageGalleryItemStyled } from './ImageGalleryItemStyled';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleIsModalOpen = () => {
    this.setState(prev => ({ isModalOpen: !prev.isModalOpen }));
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <ImageGalleryItemStyled>
        <img
          className="image"
          onClick={this.toggleIsModalOpen}
          src={this.props.picture.webformatURL}
          alt={this.props.picture.tags}
        />
        {isModalOpen && (
          <Modal
            pictureInfo={this.props.picture}
            toggleIsModalOpen={this.toggleIsModalOpen}
          />
        )}
      </ImageGalleryItemStyled>
    );
  }
}
export default ImageGalleryItem;
