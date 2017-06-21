import * as APIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const fetchTracks = tracks => dispatch => {
  return APIUtil.fetchTracks()
    .then(tracks => dispatch(receiveTracks(tracks)));
};
