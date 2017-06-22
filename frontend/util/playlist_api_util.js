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
