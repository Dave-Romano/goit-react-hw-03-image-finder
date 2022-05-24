import React, { Component } from 'react';
import { ButtonStyled } from './ButtonStyled';

class Button extends Component {
  render() {
    return (
      <ButtonStyled>
        <button type="button" className="loadingButton">
          Load more...
        </button>
        {/* <div className="Test">Запустити ракету</div> */}
      </ButtonStyled>
    );
  }
}

export default Button;
