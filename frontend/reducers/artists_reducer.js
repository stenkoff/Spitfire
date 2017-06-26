import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ARTIST, RECEIVE_ARTISTS } from '../actions/artist_actions';
import merge from 'lodash/merge';

const ArtistsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.artists);
    case RECEIVE_ARTIST:
      return merge({}, state, { [action.artist.id]: action.artist} )
    default:
      return state;
  }
};

export default ArtistsReducer;
