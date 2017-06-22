import { RECEIVE_PLAYLISTS } from '../actions/playlist_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const PlaylistsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.playlists);
    case RECEIVE_PLAYLISTS:
      return action.user.playlists
    default:
      return state;
  }
};

export default PlaylistsReducer;
