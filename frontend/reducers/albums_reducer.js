import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';
import merge from 'lodash/merge';

const AlbumsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.albums);
    case RECEIVE_ALBUM:
      return merge({}, state, { [action.album.id]: action.album} )
    default:
      return state;
  }
};

export default AlbumsReducer;
