import React, { Component } from 'react';
import ImageGalletyItem from './imageGalleryItem/ImageGalleryItem';
import { getPictures } from '../../api/index';

class ImageGallery extends Component {
  render() {
    const test = async () => {
      const some = await getPictures(12, 1, 'cat');
      console.log(some);
    };
    test();
    return (
      <ul className="gallery">
        <ImageGalletyItem></ImageGalletyItem>
      </ul>
    );
  }
}
export default ImageGallery;
