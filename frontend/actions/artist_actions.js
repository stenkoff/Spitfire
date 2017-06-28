import * as APIUtil from '../util/artist_api_util';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';

export const receiveArtist = ({artist, tracks}) => {
  return {
    type: RECEIVE_ARTIST,
    artist,
    tracks
  }
};

export const receiveArtists = ({artists, tracks}) => {
  return {
    type: RECEIVE_ARTISTS,
    artists,
    tracks
  }
};

export const fetchArtist = id => dispatch => {
  return APIUtil.fetchArtist(id)
    .then(artist => dispatch(receiveArtist(artist)));
};

export const fetchArtists = () => dispatch => {
  return APIUtil.fetchArtists()
    .then(artists => dispatch(receiveArtists(artists)));
};
