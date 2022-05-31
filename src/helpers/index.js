import { getPictures } from 'api';

export const setPicturesToState = async (setPictures, perPage, page, name) => {
  const pictures = await getPictures(12, 1, 'cat');
  setPictures({ pictures });
};
