export const fetchPlaylists = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/playlists`,
  });
};
