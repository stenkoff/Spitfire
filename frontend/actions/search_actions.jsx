import * as APIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const recieveSearch = results => {
  return {
    type: RECEIVE_SEARCH,
    results
  }
}

export const fetchSearch = search => dispatch => {
  return APIUtil.search(search)
    .then(results => dispatch(recieveSearch(results)));
};

window.fetchSearch = fetchSearch;
