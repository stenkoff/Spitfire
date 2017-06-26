import { RECEIVE_PLAYLIST, REMOVE_PLAYLIST } from '../actions/playlist_actions';
import merge from 'lodash/merge';
import { RECEIVE_ALBUM} from '../actions/album_actions';

const TracksReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_PLAYLIST:
      return merge({}, action.tracks)
    case RECEIVE_ALBUM:
      return merge({}, action.tracks)
    default:
      return state;
  }
};

export default TracksReducer;
