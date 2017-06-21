export const fetchPlaylists = user => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user.id}`
  });
};
