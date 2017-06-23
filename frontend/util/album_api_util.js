export const fetchAlbum = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/albums/${id}`
  });
};
