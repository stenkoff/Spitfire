import * as APIUtil from '../util/album_api_util';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';

export const receiveAlbum = ({album, tracks}) => {
  return {
    type: RECEIVE_ALBUM,
    album,
    tracks
  }
};

export const receiveAlbums = ({albums}) => {
  return {
    type: RECEIVE_ALBUMS,
    albums
  }
};

export const fetchAlbum = id => dispatch => {
  return APIUtil.fetchAlbum(id)
    .then(album => dispatch(receiveAlbum(album)));
};

export const fetchAlbums = () => dispatch => {
  return APIUtil.fetchAlbums()
    .then(albums => dispatch(receiveAlbums(albums)));
};
