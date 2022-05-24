import styled from 'styled-components';
export const SearchbarStyled = styled.div`
  background-color: #494157;
  height: 60px;
  display: flex;

  .form {
    height: 42px;
    width: 520px;
    margin: auto;
  }

  .searchInput {
    padding-left: 42px;
    height: 40px;
    width: 520px;
    border: none;
    border-radius: 4px;
    background-color: white;
  }

  .buttonSearch {
    /* color: black; */
    color: gray;
    position: absolute;
    border: none;
    border-radius: 4px;
    width: 41px;
    height: 42px;
    background-color: white;
    opacity: 1;
  }

  .buttonSearch:hover {
    color: #494157;
    /* background-color: white; */
    cursor: pointer;
  }

  .faSearch {
    /* position: absolute; */
    opacity: 100% !important;

    height: 25px;
    width: 25px;
    margin-top: 6px;
    opacity: 30%;
    z-index: 5;
  }
`;
