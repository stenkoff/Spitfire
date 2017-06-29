import { RECEIVE_SEARCH } from '../actions/search_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
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
      case RECEIVE_CURRENT_USER:
        return {};
    default:
      return state;
  }
};

export default SearchReducer;
