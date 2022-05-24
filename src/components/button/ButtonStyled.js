import styled from 'styled-components';
export const ButtonStyled = styled.div`
  display: flex;
  justify-content: center;

  .loadingButton {
    margin: 10px;
    width: 200px;
    height: 40px;
    background-color: #494157;
    color: gray;
    border-radius: 9px;
    border: none;
    cursor: pointer;
  }

  .loadingButton:hover {
    border: 2px solid white;
    color: white;
  }
`;
