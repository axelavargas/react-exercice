import debounce from 'lodash.debounce';

const API_URL = 'https://api.itbook.store/1.0/search';
const CORS_EVERYWHERE = 'https://cors-anywhere.herokuapp.com';

function searchBooks(searchTerm, useCorsEverywhere = true) {
  let url = `${API_URL}/${searchTerm}`;
  if (useCorsEverywhere) {
    url = `${CORS_EVERYWHERE}/${url}`;
  }

  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((data) => data.books.slice(0, 100));
}

export default debounce(searchBooks, 500, {
  leading: true,
});