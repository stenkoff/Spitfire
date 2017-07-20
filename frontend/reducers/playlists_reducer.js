import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST, REMOVE_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const PlaylistsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.playlists);
    case LOGOUT_CURRENT_USER:
      return merge({}, action.playlists);
    case RECEIVE_PLAYLISTS:
      return action.user.playlists
    case RECEIVE_PLAYLIST:
      return merge({}, state, { [action.playlist.id]: action.playlist} )
    case REMOVE_PLAYLIST:
      return merge({}, action.playlists)
    default:
      return state;
  }
};

export default PlaylistsReducer;
