// export const fetchPlaylists = user => {
//   return $.ajax({
//     method: 'GET',
//     url: `/api/users/${user.id}`
//   });
// };

export const fetchPlaylist = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/playlists/${id}`
  });
};

export const createPlaylist = playlist => {
  return $.ajax({
    method: 'POST',
    url: '/api/playlists',
    data: { playlist }
  });
};

export const deletePlaylist = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/playlists/${id}`
  });
};

export const addTrack = playlisting => {
  return $.ajax({
    method: 'POST',
    url: 'api/playlisting',
    data: { playlisting }
  });
};
