import * as APIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLISTS';

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

export const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

export const fetchPlaylistsForUser = (user) => dispatch => {
  return APIUtil.fetchPlaylists(user)
    .then(user => dispatch(receivePlaylists(user)));
};

// export const fetchPlaylist = id => dispatch => {
//   return APIUtil.fetchPlaylist(id)
//     .then(playlist => dispatch(receivePlaylist(playlist)));
// };
