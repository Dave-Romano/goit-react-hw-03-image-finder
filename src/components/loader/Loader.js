import React, { Component } from 'react';
import { Triangle } from 'react-loader-spinner';
import { LoaderStyled } from './LoaderStyled';

export default class Loader extends Component {
  render() {
    return (
      <LoaderStyled>
        <Triangle className="spinner" color="#494157" />
      </LoaderStyled>
    );
  }
}
