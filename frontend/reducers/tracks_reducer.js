import { RECEIVE_PLAYLIST, REMOVE_PLAYLIST } from '../actions/playlist_actions';
import merge from 'lodash/merge';
import { RECEIVE_ALBUM} from '../actions/album_actions';
import { RECEIVE_ARTIST} from '../actions/artist_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const TracksReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_PLAYLIST:
      return merge({}, action.tracks)
    case RECEIVE_ALBUM:
      return merge({}, action.tracks)
    case RECEIVE_ARTIST:
      return merge({}, action.tracks)
    case RECEIVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default TracksReducer;
