import * as APIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

export const fetchPlaylistsForUser = (user) => dispatch => {
  return APIUtil.fetchPlaylists(user)
    .then(user => dispatch(receivePlaylists(user)));
};
