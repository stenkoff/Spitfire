import * as APIUtil from '../util/album_api_util';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

export const receiveAlbum = ({album, tracks}) => {
  return {
    type: RECEIVE_ALBUM,
    album,
    tracks
  }
};

export const fetchAlbum = id => dispatch => {
  return APIUtil.fetchAlbum(id)
    .then(album => dispatch(receiveAlbum(album)));
};
