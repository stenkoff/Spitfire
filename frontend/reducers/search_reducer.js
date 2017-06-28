import { RECEIVE_SEARCH } from '../actions/search_actions';
import merge from 'lodash/merge';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SEARCH:
      let playlists = action.results.playlists.slice();
      let albums = action.results.albums.slice();
      let artists = action.results.artists.slice();
      let tracks = action.results.tracks.slice();
      return {playlists, albums, artists, tracks};
    default:
      return state;
  }
};

export default SearchReducer;
