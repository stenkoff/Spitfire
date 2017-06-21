const fetchAllTracks = ({ tracks }) => (
  Object.keys(tracks).map(key => tracks[key])
);

export default fetchAllTracks;
