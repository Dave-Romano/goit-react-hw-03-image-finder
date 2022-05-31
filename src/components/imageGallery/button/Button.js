import Loader from 'components/loader/Loader';
import { STATUS_PENDING } from 'configs';
import React, { Component } from 'react';
import { ButtonStyled } from './ButtonStyled';

class Button extends Component {
  render() {
    const { status } = this.props;
    return (
      <ButtonStyled>
        {status === STATUS_PENDING ? (
          <Loader />
        ) : (
          <button
            type="button"
            className="loadingButton"
            onClick={this.props.LoadPictures}
          >
            Load more...
          </button>
        )}
      </ButtonStyled>
    );
  }
}

export default Button;
