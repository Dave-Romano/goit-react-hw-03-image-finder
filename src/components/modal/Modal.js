import React, { Component } from 'react';
import { ModalStyled } from './ModalStyled';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleOnKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleOnKeyPress);
  }

  handleModalClose = e => {
    if (e.target.tagName === 'IMG') return;
    this.props.toggleIsModalOpen();
  };

  handleOnKeyPress = e => {
    console.log(e.key);
    if (e.key === 'Escape') this.props.toggleIsModalOpen();
  };

  render() {
    const { pictureInfo } = this.props;
    return (
      <ModalStyled
        onClick={this.handleModalClose}
        onKeyPress={this.handleOnKeyPress}
      >
        <div className="Modal__content">
          <img src={pictureInfo.largeImageURL} alt="" />
        </div>
      </ModalStyled>
    );
  }
}
