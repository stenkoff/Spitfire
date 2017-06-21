import * as APIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

export const fetchPlaylists = user => dispatch => {
  return APIUtil.fetchPlaylists(user)
    .then(playlists => dispatch(receivePlaylists(playlists)));
};
