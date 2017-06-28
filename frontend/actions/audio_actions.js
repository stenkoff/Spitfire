export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const SKIP = 'SKIP';

export const receiveSong = track => {
  return {
    type: RECEIVE_CURRENT_SONG,
    track
  }
}
export const receiveSongs = tracks => {
  return {
    type: RECEIVE_SONGS,
    tracks
  }
}

export const skip = () => {
  return {
    type: SKIP
  }
}

export const playTrack = (track) => {
  return track => dispatch(receiveSong(track));
}


// export const playTracks = (tracks) => {
//   return tracks => dispatch(receiveSongs(track));
// }
