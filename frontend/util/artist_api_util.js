export const fetchArtists = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/artists'
  });
};

export const fetchArtist = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/artists/${id}`
  });
};

// export const fetchArtistsForUser = () {
//
// }
