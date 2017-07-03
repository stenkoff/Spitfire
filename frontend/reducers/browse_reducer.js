import { RECEIVE_ARTISTS } from '../actions/artist_actions';
import { RECEIVE_ALBUMS } from '../actions/album_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


const BrowseReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ARTISTS:
    let artists = action.artists.slice();
    let albums = action.albums.slice();
    return {artists, albums};
      return action.artists;
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default BrowseReducer;
