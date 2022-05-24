import axios from 'axios';
const PIXIBAY_BASE_URL = 'https://pixabay.com/api/';
const PIXIBAY_KEY = '27604476-9132adab5e23a2ed5d31ecf34';
export const getPictures = async (perPage, page, word) => {
  const { data } = await axios.get(
    `${PIXIBAY_BASE_URL}?q=${word}&page=${page}&key=${PIXIBAY_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
  return data;
};
