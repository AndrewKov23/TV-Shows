import { SEARCH_SHOW, GET_FILTER, LOAD_SHOW, ERROR, LOAD_PAGES } from '../constants/action-types';

const api_key = '1f75ab34f52bf9534f93af27e5b5a2a6';

export const loadPages = (currentPage, totalPages) => ({
  type: LOAD_PAGES,
  currentPage,
  totalPages,
});

export function filterShow(filterWord='popular', page = '1') {
  return function(dispatch) {
    return fetch(`https://api.themoviedb.org/3/tv/${filterWord}?api_key=${api_key}&page=${page}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('error');
        } else {
          return response.json();
        }
      })
      .then(json => {
        let results = json.results;
        dispatch({ type: LOAD_SHOW, payload: results, pageType: filterWord });
        dispatch(loadPages(json.page, json.total_pages));
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR });
      });
  };
}

export function sortShow(sortWord) {
  return function(dispatch) {
    return fetch(
      `https://api.themoviedb.org/3/discover/tv?language=en-US&sort_by=${sortWord}&api_key=${api_key}`,
    )
      .then(response => {
        if (!response.ok) {
          throw new Error('error');
        } else {
          return response.json();
        }
      })
      .then(json => {
        let results = json.results;
        dispatch({ type: LOAD_SHOW, payload: results });
        dispatch(loadPages(json.page, json.total_pages));
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR });
      });
  };
}

export function searchShow(keywords) {
  return function(dispatch) {
    return fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${keywords}&page=1`,
    )
      .then(response => response.json())
      .then(json => {
        let resultsOfSearch = json.results;
        dispatch({ type: LOAD_SHOW, payload: resultsOfSearch });
        dispatch(loadPages(json.page, json.total_pages));
      });
  };
}
