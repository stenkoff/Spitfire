export const search = search => {
  return $.ajax({
    method: 'GET',
    url: '/api/search',
    data: { search }
  });
}
