import * as APIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

export const receivePlaylist = ({playlist, tracks}) => {
  return {
    type: RECEIVE_PLAYLIST,
    playlist,
    tracks
  }
};

export const removePlaylist = playlists => {
  return {
    type: REMOVE_PLAYLIST,
    playlists
  }
};

export const fetchPlaylistsForUser = (user) => dispatch => {
  return APIUtil.fetchPlaylists(user)
    .then(user => dispatch(receivePlaylists(user)));
};

export const fetchPlaylist = id => dispatch => {
  return APIUtil.fetchPlaylist(id)
    .then(playlist => dispatch(receivePlaylist(playlist)));
};

export const createPlaylist = playlist => dispatch => {
  return APIUtil.createPlaylist(playlist)
    .then(playlist => dispatch(receivePlaylist(playlist)));
};

export const deletePlaylist = id => dispatch => {
  return APIUtil.deletePlaylist(id)
    .then(playlists => dispatch(removePlaylist(playlists)));
};

// export const addTrack = playlisting => dispatch => {
//   return APIUtil.addTrack(playlisting)
//     .then(playlist => dispatch(receivePlaylist(playlist)));
// };

export const addTrack = playlisting => {
  return APIUtil.addTrack(playlisting);
};
