import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import merge from 'lodash/merge';

const TracksReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_PLAYLIST:
      return merge({}, state, action.tracks)
    default:
      return state;
  }
};

export default TracksReducer;
