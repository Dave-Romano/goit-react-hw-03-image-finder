import React, { Component } from 'react';
import ImageGalletyItem from './imageGalleryItem/ImageGalleryItem';
// import { getPictures } from '../../api/index';
import Button from './button/Button';
import { ImageGalleryStyled } from './ImageGalleryStyled';
import { getPictures } from '../../api/index';
import {
  STATUS_IDLE,
  STATUS_PENDING,
  STATUS_REJECTED,
  STATUS_RESOLVED,
} from 'configs';

class ImageGallery extends Component {
  state = {
    page: 1,
    images: [],
    status: STATUS_IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchWord !== this.props.searchWord) {
      this.setState({ status: STATUS_PENDING, images: [], page: 1 }, () =>
        this.loadPictures()
      );
    }
  }

  loadPictures = () => {
    this.setState({ status: STATUS_PENDING });
    getPictures(this.state.page, this.props.searchWord)
      .then(res => {
        if (!res.length) {
          return this.setState({ status: STATUS_REJECTED });
        }

        this.setState(prev => ({
          status: STATUS_RESOLVED,
          images: [...prev.images, ...res],
          page: prev.page + 1,
        }));
      })
      .catch(err => this.setState({ status: STATUS_REJECTED }));
  };

  render() {
    const { status } = this.state;
    if (status === STATUS_IDLE) {
      return (
        <ImageGalleryStyled>
          <p className="little-penis">please enter search word.</p>
        </ImageGalleryStyled>
      );
    }

    return (
      <ImageGalleryStyled>
        {(status === STATUS_RESOLVED || status === STATUS_PENDING) && (
          <>
            <ul className="gallery">
              {this.state.images.length &&
                this.state.images.map(picture => (
                  <ImageGalletyItem key={picture.id} picture={picture} />
                ))}
            </ul>

            <Button LoadPictures={this.loadPictures} status={status} />
          </>
        )}
        {status === STATUS_REJECTED && (
          <p className="error-message"> cant find this image :{'('}</p>
        )}
      </ImageGalleryStyled>
    );
  }
}
export default ImageGallery;
