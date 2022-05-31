import styled from 'styled-components';

export const ImageGalleryItemStyled = styled.li`
  width: 30%;

  .image {
    height: 200px;
    width: 400px;
    object-fit: cover;
  }
  .image:hover {
    cursor: pointer;
  }
`;
