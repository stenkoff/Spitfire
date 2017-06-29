import merge from 'lodash/merge';
import { RECEIVE_CURRENT_SONG, RECEIVE_SONGS, SKIP } from '../actions/audio_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const AudioReducer = (state = [], action) => {
  Object.freeze(state)
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      newState = state.slice();
      newState.push(action.track)
      // newState = queue: [action.track]
      return newState;
    case RECEIVE_SONGS:
      // newState = state.slice();
      // newState = newState.concat(action.tracks);
      // return newState;
      return action.tracks;
    case RECEIVE_CURRENT_USER:
      return [];
    case SKIP:
      newState = state.slice(1);
      return newState;
    default:
      return state;
  }
};

export default AudioReducer;
